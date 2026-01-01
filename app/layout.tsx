import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const subFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sub",
  display: "swap",
})

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Power Solid - Building Excellence Through Professional Engineering",
  description:
    "Power Solid provides high-performance engineering, construction, and consulting services for multiple industries in Saudi Arabia.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${subFont.variable} ${headingFont.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
