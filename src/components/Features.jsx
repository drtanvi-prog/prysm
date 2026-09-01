import { FadeUp } from './animations/FadeUp'

export const Features = () => {
  const benefits = [
    "More qualified opportunities.",
    "Better use of fundraiser time.",
    "Stronger physician engagement.",
    "Greater philanthropic impact."
  ]

  return (
    <section className="py-24 sm:py-32 lg:py-48 bg-slate-50 border-t border-slate-100/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <FadeUp delay={0.1} className="flex items-center justify-center gap-3 mb-8">
          <span className="eyebrow text-accent">Efficiency at Scale</span>
        </FadeUp>
        
        <FadeUp delay={0.2} as="h2" className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tighter leading-tight mb-10 text-balance">
          Build More Pipeline. <br/>
          <span className="text-slate-400">Not More Process.</span>
        </FadeUp>
        
        <FadeUp delay={0.3} className="text-lg sm:text-xl text-[#86868b] leading-relaxed max-w-3xl mx-auto space-y-6">
          <p>
            Healthcare philanthropy teams are being asked to produce greater results with limited resources.
          </p>
          <p>
            PRYSM helps them do more with what they already have - their data, their relationships, their fundraisers, and their clinical partners. The result is a more systematic and scalable approach to grateful patient fundraising:
          </p>
          
          <div className="pt-8 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-ink tracking-tight">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-lg sm:text-xl text-ink font-medium max-w-2xl mx-auto">
            PRYSM does not replace the relationships and judgment that drive great fundraising. It helps make sure they are focused where they matter most.
          </p>
        </FadeUp>

      </div>
    </section>
  )
}