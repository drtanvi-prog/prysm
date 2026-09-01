import { Link } from 'react-router-dom'
import { FadeUp } from './animations/FadeUp'

export const HomeSolutions = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-48 bg-slate-50 border-t border-slate-100/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <FadeUp delay={0.1} className="flex items-center justify-center gap-3 mb-8">
          <span className="eyebrow text-accent">Focused Pipeline</span>
        </FadeUp>
        
        <FadeUp delay={0.2} as="h2" className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tighter leading-tight mb-10 text-balance">
          From Millions of Patients to the Right Opportunities.
        </FadeUp>
        
        <FadeUp delay={0.3} className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-3xl mx-auto space-y-6">
          <p>
            PRYSM turns an enormous patient population into a focused, prioritized pipeline of philanthropic opportunity.
          </p>
          <p>
            Rather than relying on fundraisers to manually search for prospects across disconnected systems and data, PRYSM helps surface the people and relationships that matter most.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-4 text-ink font-semibold tracking-tight text-xl sm:text-2xl">
            <span className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">Right person.</span>
            <span className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">Right context.</span>
            <span className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">Right time.</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.4} className="mt-16 flex justify-center">
            <Link to="/platform" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-ink text-white font-medium hover:bg-ink-soft transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer text-sm sm:text-base">
              Explore the Platform
            </Link>
        </FadeUp>
        
      </div>
    </section>
  )
}