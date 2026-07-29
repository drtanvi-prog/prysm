import providenceLogo from '../assets/integration/providence-health-services.svg';
import cityOfHopeLogo from '../assets/integration/city-of-hope-logo-vector.png';
import lsuHealthLogo from '../assets/integration/lsu-health-sciences-center-new-orleans-logo-brand-product-design-png-favpng-MQGePmn6RGsC2b3fhkBN0HJmC.png';
import rutgersLogo from '../assets/integration/Rutgers-Health-Lockup_Horizontal_Red-and-Black_RGB.svg';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="eyebrow">The Operational Bridge</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.15] mb-6">
              Where healthcare and philanthropy operate as <span className="text-accent">one system.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Prysm connects clinicians, patients, and fundraisers on a single platform - turning clinical encounters into qualified major gifts, without asking your teams to change how they already work.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-ink text-white font-medium hover:bg-ink-soft transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer text-sm sm:text-base">
                Request Demo
              </button>
              <button className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 transition-all hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
                Explore the Platform
              </button>
            </div>
          </div>

          {/* Signature visual: EMR -> Prysm -> CRM bridge (not a dashboard screenshot) */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-lg p-6 sm:p-8 lg:p-10">

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">

                <div className="flex-1 text-center w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-ink">EMR</div>
                  <div className="text-xs text-slate-500 mt-0.5">Clinical record</div>
                </div>

                {/* Connection Line 1 */}
                <div className="hidden sm:flex items-center justify-center flex-1 relative min-w-[40px] px-2">
                  <div className="w-full h-px bg-slate-300"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <div className="flex sm:hidden flex-col items-center justify-center h-8 relative">
                  <div className="w-px h-full bg-slate-300"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div className="flex-1 text-center w-full sm:w-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl bg-ink flex items-center justify-center mb-3 shadow-md">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div className="text-sm font-bold text-ink">Prysm</div>
                  <div className="text-xs text-slate-500 mt-0.5">The bridge</div>
                </div>

                {/* Connection Line 2 */}
                <div className="hidden sm:flex items-center justify-center flex-1 relative min-w-[40px] px-2">
                  <div className="w-full h-px bg-slate-300"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <div className="flex sm:hidden flex-col items-center justify-center h-8 relative">
                  <div className="w-px h-full bg-slate-300"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div className="flex-1 text-center w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-sm font-bold text-ink">Donor CRM</div>
                  <div className="text-xs text-slate-500 mt-0.5">System of record</div>
                </div>
              </div>

              <div className="mt-7 sm:mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-ink">$4.3M</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-tight">First-year gifts</div>
                </div>
                <div className="border-t sm:border-t-0 sm:border-x border-slate-100 py-3 sm:py-0">
                  <div className="text-xl sm:text-2xl font-bold text-ink">+1,233%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-tight">First-time gifts</div>
                </div>
                <div className="border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                  <div className="text-xl sm:text-2xl font-bold text-ink">+3,225%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-tight">Physician referrals</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Trusted By Banner */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200">
          <div className="flex justify-center mb-8">
            <span className="eyebrow">Trusted by leading health systems</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            <img src={providenceLogo} alt="Providence Health" className="h-7 sm:h-10 object-contain" />
            <img src={cityOfHopeLogo} alt="City of Hope" className="h-7 sm:h-10 object-contain" />
            <img src={lsuHealthLogo} alt="LSU Health" className="h-9 sm:h-12 object-contain" />
            <img src={rutgersLogo} alt="Rutgers Health" className="h-7 sm:h-10 object-contain" />
          </div>
        </div>
      </div>

    </section>
  )
}