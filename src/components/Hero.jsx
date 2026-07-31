import { Link } from 'react-router-dom';
import providenceLogo from '../assets/integration/providence-health-services.svg';
import cityOfHopeLogo from '../assets/integration/city-of-hope-logo-vector.png';
import lsuHealthLogo from '../assets/integration/lsu-health-sciences-center-new-orleans-logo-brand-product-design-png-favpng-MQGePmn6RGsC2b3fhkBN0HJmC.png';
import rutgersLogo from '../assets/integration/Rutgers-Health-Lockup_Horizontal_Red-and-Black_RGB.svg';
import prysmIcon from '../assets/icons/prysm-icon-dark.svg';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Headings & Actions */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline"></span>
            <span className="eyebrow">The Operational Bridge</span>
            <span className="hairline"></span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-tight mb-6">
            Where healthcare and philanthropy operate as <span className="text-accent">one system.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Prysm connects clinicians, patients, and fundraisers on a single platform - turning clinical encounters into qualified major gifts, without asking your teams to change how they already work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-ink text-white font-medium hover:bg-ink-soft transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer text-sm sm:text-base">
              Request Demo
            </Link>
            <Link to="/platform" className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 transition-all hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
              Explore the Platform
            </Link>
          </div>
        </div>

        {/* Signature visual: EMR -> Prysm -> CRM bridge */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-xl bg-slate-50/50 border border-slate-200/60 pt-6 pb-5 px-4 sm:p-8 lg:p-10 transition-colors duration-300">

            <div className="flex flex-row items-center justify-between gap-1 sm:gap-2">

              <div className="flex-1 text-center">
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm font-bold text-ink whitespace-nowrap">EMR</div>
                <div className="text-[9px] sm:text-xs text-slate-500 mt-0.5 leading-tight hidden xs:block whitespace-nowrap">Clinical record</div>
              </div>

              {/* Connection Line 1 */}
              <div className="flex items-center justify-center flex-1 relative min-w-[20px] sm:min-w-[40px] px-1 sm:px-2">
                <div className="w-full h-px bg-slate-200"></div>
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent"></div>
              </div>

              <div className="flex-1 text-center flex flex-col items-center justify-center">
                <div className="h-10 sm:h-16 flex items-center justify-center">
                  <img src={prysmIcon} alt="Prysm" className="h-5 sm:h-9 w-auto object-contain" />
                </div>
              </div>

              {/* Connection Line 2 */}
              <div className="flex items-center justify-center flex-1 relative min-w-[20px] sm:min-w-[40px] px-1 sm:px-2">
                <div className="w-full h-px bg-slate-200"></div>
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm font-bold text-ink whitespace-nowrap">Donor CRM</div>
                <div className="text-[9px] sm:text-xs text-slate-500 mt-0.5 leading-tight hidden xs:block whitespace-nowrap">System of record</div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-1 sm:gap-4 text-center">
              <div>
                <div className="text-base sm:text-2xl font-bold text-ink">$4.3M</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">First-year gifts</div>
              </div>
              <div className="border-x border-slate-200/60 px-1 sm:px-2">
                <div className="text-base sm:text-2xl font-bold text-ink">+1,233%</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">First-time gifts</div>
              </div>
              <div>
                <div className="text-base sm:text-2xl font-bold text-ink">+3,225%</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight font-medium">Referrals</div>
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