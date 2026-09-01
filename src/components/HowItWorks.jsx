import { FadeUp } from './animations/FadeUp'

export const HowItWorks = () => {
  return (
    <section id="the-difference" className="py-24 sm:py-32 lg:py-40 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <FadeUp delay={0.1} className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow text-accent">The Prysm Difference</span>
            <span className="hairline"></span>
          </FadeUp>
          <FadeUp delay={0.2} as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Bridging the gap between data and relationships.
          </FadeUp>
          <FadeUp delay={0.3} className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Prysm is a secure intelligence layer that sits between your clinical systems and your fundraising database. It closes the loop every other system leaves open.
          </FadeUp>
        </div>

        {/* Comparison Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: AI Tools */}
          <FadeUp delay={0.4} className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-grow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-ink mb-4">AI Point Solutions</h4>
              <p className="text-slate-500 leading-relaxed mb-8">
                They surface prospects effectively, but lack the workflow capabilities needed to manage clinician partnerships and track real outcomes.
              </p>
            </div>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase pt-6 border-t border-slate-100">
              Incomplete Workflow
            </div>
          </FadeUp>

          {/* Card 2: Donor CRMs */}
          <FadeUp delay={0.5} className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-grow">
               <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-ink mb-4">Traditional CRMs</h4>
              <p className="text-slate-500 leading-relaxed mb-8">
                They securely hold donor data and manage relationships, but fail to report engagement impact back to the medical staff.
              </p>
            </div>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase pt-6 border-t border-slate-100">
              System of Record Only
            </div>
          </FadeUp>

          {/* Card 3: Prysm */}
          <FadeUp delay={0.6} className="bg-ink p-8 sm:p-10 rounded-2xl flex flex-col relative overflow-hidden shadow-xl lg:-translate-y-4">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex-grow">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">The Prysm Platform</h4>
              <p className="text-slate-300 leading-relaxed mb-8">
                Bridges the gap by intelligently surfacing high-capacity clinical prospects and closing the loop with automated outcome reporting.
              </p>
            </div>
            <div className="relative z-10 pt-6 border-t border-white/20 mt-auto flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
               <span className="text-sm font-bold tracking-widest text-accent uppercase">Only Prysm does both</span>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}