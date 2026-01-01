import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import sharp from "sharp"

const PROJECT_ROOT = process.cwd()
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public")
const OUT_DIR = path.join(PUBLIC_DIR, "optimized")

const TARGETS = [
  // Home hero slider (very large sources)
  { input: "hero1.webp", output: "hero1.webp" },
  { input: "hero2.webp", output: "hero2.webp" },
  { input: "hero3.webp", output: "hero3.webp" },
  { input: "hero4.webp", output: "hero4.webp" },
  { input: "hero5.webp", output: "hero5.webp" },
  { input: "hero6.webp", output: "hero6.webp" },
  { input: "hero7.webp", output: "hero7.webp" },

  // Large inner-page hero backgrounds
  { input: "images/construction-site2.jpg", output: "construction-site2.webp" },
  { input: "images/hero-background.jpg", output: "hero-background.webp" },
  { input: "refinery-turnaround-maintenance.jpg", output: "refinery-turnaround-maintenance.webp" },
  { input: "construction-projects-overview-aerial.jpg", output: "construction-projects-overview-aerial.webp" },
]

const MAX_WIDTH = Number(process.env.OPTIMIZE_MAX_WIDTH || 2560)
const WEBP_QUALITY = Number(process.env.OPTIMIZE_QUALITY || 82)
const FORCE = process.env.OPTIMIZE_FORCE === "1"

async function fileSize(filePath) {
  try {
    const stat = await fs.stat(filePath)
    return stat.size
  } catch {
    return null
  }
}

function formatBytes(bytes) {
  if (bytes === null) return "(missing)"
  const units = ["B", "KB", "MB", "GB"]
  let value = bytes
  let unitIndex = 0
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex += 1
  }
  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function optimizeOne({ input, output }) {
  const inPath = path.join(PUBLIC_DIR, input)
  const outPath = path.join(OUT_DIR, output)

  const inBytes = await fileSize(inPath)
  if (inBytes === null) {
    console.log(`- Skip (missing): ${input}`)
    return
  }

  await ensureDir(path.dirname(outPath))

  // Idempotent: if output exists and is newer, skip
  const [inStat, outStat] = await Promise.all([
    fs.stat(inPath),
    fs.stat(outPath).catch(() => null),
  ])

  if (!FORCE && outStat && outStat.mtimeMs >= inStat.mtimeMs) {
    console.log(`- Up-to-date: ${input} → optimized/${output}`)
    return
  }

  const image = sharp(inPath, { failOn: "none" })
  const metadata = await image.metadata()

  const width = metadata.width ?? null
  const shouldResize = width ? width > MAX_WIDTH : true

  let pipeline = image
  if (shouldResize) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    })
  }

  await pipeline
    .webp({ quality: WEBP_QUALITY })
    .toFile(outPath)

  const outBytes = await fileSize(outPath)
  console.log(
    `- Wrote: ${input} → optimized/${output}  (${formatBytes(inBytes)} → ${formatBytes(outBytes)})`,
  )
}

async function main() {
  await ensureDir(OUT_DIR)
  console.log(`Optimizing images into: ${path.relative(PROJECT_ROOT, OUT_DIR)}`)
  console.log(`Max width: ${MAX_WIDTH}px, WebP quality: ${WEBP_QUALITY}${FORCE ? " (force)" : ""}`)

  for (const target of TARGETS) {
    // eslint-disable-next-line no-await-in-loop
    await optimizeOne(target)
  }

  console.log("Done.")
}

main().catch((err) => {
  console.error("Image optimization failed:", err)
  process.exitCode = 1
})
