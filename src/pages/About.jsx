import { useSEO } from '../utils/useSEO'

export const About = () => {
  useSEO(
    'About Us - Actionable Insight',
    'Our mission is to advance global healthcare. Learn how we built Prysm to bridge the gap between healthcare systems and philanthropy.'
  )

  return (
    <div className="bg-white">
      <section 
        className="relative pt-16 pb-16 sm:py-28 lg:py-32 bg-cover bg-center flex flex-col justify-center min-h-[280px] sm:min-h-[380px]"
        style={{ backgroundImage: "url('/about-banner1.53c600cf.jpg')" }}
      >
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-accent"></span>
              <span className="text-xs font-bold tracking-[0.18em] text-accent-soft uppercase">About Actionable Insight</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Your success is <span className="text-accent-soft font-semibold">our success.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Our mission is to advance global healthcare one client at a time. Efficiency without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">Our Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-10">
            The next generation of grateful patient program development
          </h2>

          <div className="prose prose-lg max-w-none text-slate-500 space-y-8">
            <p className="leading-relaxed">
              For a long time, the philanthropic capacity of the healthcare industry has operated at a noticeable
              deficit relative to comparable domestic nonprofit institutions - a reality that directly affects
              our nation's broader ability to cure disease and advance global healthcare.
            </p>
            <p className="leading-relaxed">
              We started Actionable Insight to build a better way for health systems to realize their true
              philanthropic potential. What initially began as a boutique advisory firm for healthcare
              executives eventually resulted in the development of our flagship technology product, Prysm.
            </p>
            <p className="leading-relaxed">
              Prysm is fundamentally shifting the landscape of healthcare philanthropy by closing the technology
              gap between health systems and higher education, providing healthcare development professionals
              with the resources they need to thrive.
            </p>
            <p className="leading-relaxed font-medium text-slate-900">
              Most importantly, it ensures that your community can continue receiving the highest quality medical care available.
            </p>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
            Discover how Prysm can work for you.
          </h2>
          <a href="mailto:sales@actionableinsightai.com" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ink text-white font-medium hover:bg-ink-soft transition-colors shadow-sm cursor-pointer">
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  )
}