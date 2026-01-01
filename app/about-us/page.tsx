"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

export default function AboutUsPage() {
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SITE HEADER (same as other pages) */}
      <Header />

      {/* PAGE CONTENT */}
      <main className="flex-1 bg-[#020617] text-white">
        {/* Top banner */}
        <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,#facc15_0,transparent_45%),#020617] pt-32 md:pt-36">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-[#facc15] uppercase mb-3">
              {pickLang(lang, { en: "About Power Solid Company", ar: "عن شركة باور سوليد" })}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {pickLang(lang, {
                en: "Trusted Manpower Partner for Oil & Gas, Petrochemical & Construction Projects",
                ar: "شريك موثوق للقوى العاملة لمشاريع النفط والغاز والبتروكيماويات والإنشاءات",
              })}
            </h1>
            <p className="max-w-3xl text-sm md:text-base lg:text-lg text-white/80">
              {pickLang(lang, {
                en: "Power Solid is a manpower and industrial contracting company based in Jubail, Saudi Arabia. We provide certified shutdown and long-term project manpower across the Kingdom – with a strong focus on safety, compliance and reliable, on-time mobilization.",
                ar: "باور سوليد شركة متخصصة في توريد القوى العاملة والمقاولات الصناعية ومقرها الجبيل، المملكة العربية السعودية. نوفر كوادر معتمدة لمشاريع الإيقاف والمشاريع طويلة الأمد في جميع أنحاء المملكة — مع تركيز قوي على السلامة والامتثال والتعبئة الموثوقة وفي الوقت المحدد.",
              })}
            </p>
          </div>
        </section>

        {/* Main about content */}
        <section className="bg-[#020617]">
          <div className="container mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.7fr,1.3fr]">
            {/* Left column – story + detailed paragraph */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">{pickLang(lang, { en: "Who we are", ar: "من نحن" })}</h2>
              <p className="text-sm md:text-base text-white/80 mb-4">
                {pickLang(lang, {
                  en: "Power Solid supplies certified Riggers (I, II, III), Work Permit Receivers, Firewatchers, Safety Officers, helpers and complete shutdown teams across Jubail, the Eastern Province and all over KSA – with a strong focus on safety, compliance and on-time mobilization.",
                  ar: "توفر باور سوليد رافعين معتمدين (I, II, III)، ومستلمي تصاريح العمل، ومراقبي الحريق، ومسؤولي السلامة، والمساعدين، وفرق الإيقاف المتكاملة في الجبيل والمنطقة الشرقية وجميع أنحاء المملكة — مع تركيز قوي على السلامة والامتثال والتعبئة في الوقت المحدد.",
                })}
              </p>
              <p className="text-sm md:text-base text-white/80 mb-4">
                {pickLang(lang, {
                  en: "Our teams are trained to work in demanding industrial environments – refineries, petrochemical plants, construction sites and shutdown projects – supporting our clients’ operations while meeting site-specific procedures and international safety standards.",
                  ar: "فرقنا مدرّبة للعمل في بيئات صناعية عالية المتطلبات — المصافي ومصانع البتروكيماويات ومواقع الإنشاء ومشاريع الإيقاف — لدعم عمليات عملائنا مع الالتزام بإجراءات المواقع ومعايير السلامة الدولية.",
                })}
              </p>
              <p className="text-sm md:text-base text-white/80">
                {pickLang(lang, {
                  en: "We aim to be a long-term partner to our clients, not just a manpower supplier. That means understanding project schedules, site requirements and permit systems, and mobilizing the right people at the right time so work can progress without delays.",
                  ar: "نسعى لأن نكون شريكاً طويل الأمد لعملائنا وليس مجرد مورد عمالة. وهذا يعني فهم جداول المشاريع ومتطلبات المواقع وأنظمة التصاريح، وتعبئة الأشخاص المناسبين في الوقت المناسب حتى تتقدم الأعمال دون تأخير.",
                })}
              </p>
            </div>

            {/* Right column – quick facts / categories */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 lg:p-8 backdrop-blur">
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                {pickLang(lang, { en: "Core manpower categories", ar: "فئات القوى العاملة الأساسية" })}
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-white/85 mb-6">
                <li>• {pickLang(lang, { en: "Riggers – Levels I, II & III", ar: "رافعات — المستويات I وII وIII" })}</li>
                <li>• {pickLang(lang, { en: "Work Permit Receivers (WPR)", ar: "مستلمو تصاريح العمل (WPR)" })}</li>
                <li>• {pickLang(lang, { en: "Firewatchers & Hole-watchers", ar: "مراقبو الحريق ومراقبو الفتحات" })}</li>
                <li>• {pickLang(lang, { en: "Safety Officers & Safety Assistants", ar: "مسؤولو السلامة ومساعدو السلامة" })}</li>
                <li>• {pickLang(lang, { en: "Helpers & General manpower", ar: "مساعدون وعمّال عموم" })}</li>
                <li>• {pickLang(lang, { en: "Shutdown & maintenance support crews", ar: "فرق دعم الإيقاف والصيانة" })}</li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {pickLang(lang, { en: "Where we operate", ar: "نطاق عملنا" })}
              </h3>
              <p className="text-sm md:text-base text-white/80 mb-4">
                {pickLang(lang, {
                  en: "Our primary focus is Jubail and the Eastern Province, supporting major industrial facilities and contractors on both offshore and onshore projects. We regularly deploy teams to refineries, petrochemical plants, construction sites, ports and offshore facilities across Saudi Arabia.",
                  ar: "يتركز عملنا بشكل أساسي في الجبيل والمنطقة الشرقية، لدعم المنشآت الصناعية الكبرى والمقاولين في المشاريع البرية والبحرية. نقوم بشكل منتظم بتجهيز الفرق للمصافي ومصانع البتروكيماويات ومواقع الإنشاء والموانئ والمنشآت البحرية في أنحاء المملكة.",
                })}
              </p>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {pickLang(lang, { en: "Why clients choose Power Solid", ar: "لماذا يختار العملاء باور سوليد" })}
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-white/80">
                <li>• {pickLang(lang, { en: "Certified and experienced industrial manpower", ar: "عمالة صناعية معتمدة وذات خبرة" })}</li>
                <li>• {pickLang(lang, { en: "Strong safety culture and compliance mindset", ar: "ثقافة سلامة قوية ونهج امتثال" })}</li>
                <li>• {pickLang(lang, { en: "Fast mobilization for shutdowns and urgent needs", ar: "تعبئة سريعة للإيقافات والاحتياجات العاجلة" })}</li>
                <li>• {pickLang(lang, { en: "Clear communication and responsive coordination", ar: "تواصل واضح وتنسيق سريع الاستجابة" })}</li>
                <li>• {pickLang(lang, { en: "Flexible contracts for short-term and long-term projects", ar: "عقود مرنة للمشاريع قصيرة وطويلة الأمد" })}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process / how we work */}
        <section className="bg-[#020617] border-t border-white/5">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              {pickLang(lang, { en: "How we work with our clients", ar: "كيف نعمل مع عملائنا" })}
            </h2>
            <div className="grid gap-6 md:grid-cols-4 text-sm md:text-base">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  {pickLang(lang, { en: "01 • Requirement", ar: "01 • المتطلبات" })}
                </p>
                <p className="text-white/85">
                  {pickLang(lang, {
                    en: "We discuss your project scope, site requirements, categories, quantities and tentative mobilization dates.",
                    ar: "نناقش نطاق المشروع ومتطلبات الموقع والفئات والكميات وتواريخ التعبئة المتوقعة.",
                  })}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  {pickLang(lang, { en: "02 • Selection", ar: "02 • الاختيار" })}
                </p>
                <p className="text-white/85">
                  {pickLang(lang, {
                    en: "Profiles are shortlisted based on certifications, experience and specific client criteria for each category.",
                    ar: "يتم ترشيح الكوادر بناءً على الشهادات والخبرة ومعايير العميل الخاصة بكل فئة.",
                  })}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  {pickLang(lang, { en: "03 • Mobilization", ar: "03 • التعبئة" })}
                </p>
                <p className="text-white/85">
                  {pickLang(lang, {
                    en: "We coordinate documentation, medicals and gate pass processes to ensure timely site mobilization.",
                    ar: "ننسق الوثائق والفحوصات الطبية وإجراءات تصاريح الدخول لضمان التعبئة في الوقت المحدد.",
                  })}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  {pickLang(lang, { en: "04 • Ongoing support", ar: "04 • دعم مستمر" })}
                </p>
                <p className="text-white/85">
                  {pickLang(lang, {
                    en: "Our team tracks attendance, performance and replacement needs so your project runs smoothly from start to finish.",
                    ar: "يتابع فريقنا الحضور والأداء واحتياجات الاستبدال لضمان سير المشروع بسلاسة من البداية إلى النهاية.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SITE FOOTER (same as other pages) */}
      <Footer />
    </div>
  )
}
