export const CTA = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-16 lg:p-20 relative overflow-hidden border border-slate-200">

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="hairline"></span>
                <span className="eyebrow">The Next Step</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-ink leading-tight">
                See what's possible.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                We would welcome the opportunity to join you in a conversation about your grateful patient program - and to explore whether Prysm could be the right fit for where you want to take it.
              </p>
              <a
                href="mailto:sales@actionableinsightai.com"
                className="inline-flex items-center justify-center gap-3 bg-ink hover:bg-ink-soft text-white font-medium text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Start the conversation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Right Side - Steps */}
            <div className="relative">
              <div className="space-y-4">

                {/* Step 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-bold group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ink">Program Review</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">We get to know your grateful patient program and the goals behind it.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-bold group-hover:bg-accent-soft group-hover:text-accent transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ink">Opportunity View</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">A clear read on where the most meaningful growth sits, grounded in your own data.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-sm ring-4 ring-accent-soft/60">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ink">Where Prysm Fits</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">An honest take on whether Prysm is the right next step - or whether it isn't.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}