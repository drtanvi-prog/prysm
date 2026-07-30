import prysmIconDark from '../../assets/icons/prysm-icon-dark.svg';

export const PlatformCaseStudy = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Case Study Header & Funnel */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-12 md:mb-24">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-2">Case Study: Major</h2>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-8">Academic Medical Center</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              This academic medical center had no prior history of grateful patient philanthropy, flat wealth screening results, low physician engagement, multiple health system re-brandings and a 100% outpatient population. Whoa! That’s a mouthful.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Leveraging Prysm, 2 talented major gift officers partnered with 2 enthusiastic development associates to transform healthcare philanthropy at their organization. Over a 12 month period, they expanded their major gift pipeline with 41 new qualified major gift prospects and 8 first-time donations totaling $1.8M.
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-md flex flex-col items-center">
            {/* Prysm Logo */}
            <div className="flex justify-center mb-6">
              <img src={prysmIconDark} alt="Prysm" className="h-12 w-auto object-contain" />
            </div>
            
            {/* CSS Funnel Container */}
            <div 
              className="w-full flex flex-col gap-[2px] overflow-hidden px-4" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 30% 100%)' }}
            >
              <div className="bg-accent-strong text-white text-[10px] sm:text-xs font-bold py-4 text-center px-6">
                204,543 Patients
              </div>
              <div className="bg-accent text-white text-[10px] sm:text-xs font-bold py-4 text-center px-8">
                1,387 Referrals
              </div>
              <div className="bg-accent/80 text-white text-[10px] sm:text-xs font-bold py-4 text-center px-10">
                <div className="mb-1">4161 Attempts /</div>
                <div>146 Discovery Visits</div>
              </div>
              <div className="bg-accent/60 text-white text-[10px] sm:text-xs font-bold py-4 text-center px-12">
                <div className="mb-1 text-[9px] sm:text-xs">41 Qualified Major</div>
                <div className="text-[9px] sm:text-xs">Gift Prospects</div>
              </div>
              <div className="bg-accent-soft text-ink text-[10px] sm:text-xs font-bold py-4 text-center px-14">
                8 Gifts
              </div>
            </div>
            
            {/* Arrow & Total */}
            <div className="mt-2 text-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-accent-soft mx-auto mb-2"></div>
              <div className="text-xl font-bold text-accent-strong">Totaling 1.8M</div>
            </div>
          </div>
        </div>

        {/* Benchmarks Section */}
        <div className="pt-8">
          <h2 className="text-xl font-light text-slate-800 mb-8 md:mb-16 text-center">
            Average $ Amount Raised <span className="font-semibold">per Major Gift Officer</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* System 1 */}
            <div className="bg-slate-50 relative pt-12 pb-8 px-8 border border-slate-200 rounded-xl">
              <div className="absolute top-0 left-4 bg-accent-strong text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
                Health System 1
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-8">$42,908</div>
              <div className="border-t border-slate-200 pt-8">
                <p className="text-xs text-slate-500 font-light mb-1">8 MGO's</p>
                <p className="text-xs text-slate-500 font-light mb-1">Raiser's Edge</p>
                <p className="text-xs text-slate-500 font-light">Microsoft Access</p>
              </div>
            </div>
            
            {/* System 2 */}
            <div className="bg-slate-50 relative pt-12 pb-8 px-8 border border-slate-200 rounded-xl">
              <div className="absolute top-0 left-4 bg-accent-strong text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
                Health System 2
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-8">$62,000</div>
              <div className="border-t border-slate-200 pt-8">
                <p className="text-xs text-slate-500 font-light mb-1">21 MGO's</p>
                <p className="text-xs text-slate-500 font-light mb-1">Blackbaud CRM</p>
                <p className="text-xs text-slate-500 font-light">Blackbaud Grateful Patient Solution</p>
              </div>
            </div>
            
            {/* System 3 */}
            <div className="bg-slate-50 relative pt-12 pb-8 px-8 border-2 border-accent rounded-xl">
              <div className="absolute top-0 left-4 bg-accent text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
                Health System 3
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-8">$516,000</div>
              <div className="border-t border-slate-200 pt-8">
                <p className="text-xs text-slate-500 font-light mb-1">2 MGO's + 2 Dev Associates</p>
                <p className="text-xs text-slate-500 font-light mb-6">Ellucian Advance</p>
                {/* Prysm Logo */}
                <div className="flex items-center">
                  <img src={prysmIconDark} alt="Prysm" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
