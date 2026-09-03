import { Link } from 'react-router-dom';
import providenceLogo from '../assets/integration/providence-health-services.svg';
import cityOfHopeLogo from '../assets/integration/city-of-hope-logo-vector.png';
import lsuHealthLogo from '../assets/integration/lsu-health-sciences-center-new-orleans-logo-brand-product-design-png-favpng-MQGePmn6RGsC2b3fhkBN0HJmC.png';
import rutgersLogo from '../assets/integration/Rutgers-Health-Lockup_Horizontal_Red-and-Black_RGB.svg';
import prysmIcon from '../assets/icons/prysm-icon-dark.svg';

export const Hero = () => {
  return (
    <div className="relative pt-12 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">

      {/* ---------- Background: refracted light (the Prysm signature) ----------
          Three translucent beams — teal, purple, magenta — fan out from the
          top-right corner like light leaving a prism. Static, geometric,
          fading to nothing before the headline so text stays on clean white. */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg
          className="absolute top-0 right-0 w-[140%] sm:w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMaxYMin slice"
          fill="none"
        >
          <defs>
            <linearGradient id="hero-beam-teal" x1="1440" y1="0" x2="200" y2="620" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0e9a8f" stopOpacity="0.14" />
              <stop offset="0.55" stopColor="#0e9a8f" stopOpacity="0.05" />
              <stop offset="1" stopColor="#0e9a8f" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-beam-purple" x1="1440" y1="0" x2="80" y2="820" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4f56c9" stopOpacity="0.12" />
              <stop offset="0.55" stopColor="#4f56c9" stopOpacity="0.045" />
              <stop offset="1" stopColor="#4f56c9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-beam-magenta" x1="1440" y1="0" x2="340" y2="980" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#c23d8f" stopOpacity="0.10" />
              <stop offset="0.55" stopColor="#c23d8f" stopOpacity="0.04" />
              <stop offset="1" stopColor="#c23d8f" stopOpacity="0" />
            </linearGradient>
            {/* hairline edge for the sharpest beam, gives the "cut glass" feel */}
            <linearGradient id="hero-beam-edge" x1="1440" y1="0" x2="500" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4f56c9" stopOpacity="0.25" />
              <stop offset="1" stopColor="#4f56c9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* beams fan out from a vanishing point just off the top-right corner */}
          <polygon points="1500,-60 1560,-20 420,560 200,470" fill="url(#hero-beam-teal)" />
          <polygon points="1520,-40 1580,30 300,760 60,620" fill="url(#hero-beam-purple)" />
          <polygon points="1540,0 1590,90 460,920 260,760" fill="url(#hero-beam-magenta)" />

          {/* one crisp hairline along the purple beam's upper edge */}
          <line x1="1510" y1="-50" x2="330" y2="700" stroke="url(#hero-beam-edge)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">

        {/* Headings & Actions */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-24">
          <div className="flex items-center justify-center mb-5 sm:mb-8">
            <img src={prysmIcon} alt="Prysm" className="h-6 sm:h-10 w-auto object-contain" />
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight sm:tracking-tighter leading-[1.2] sm:leading-tight mb-4 sm:mb-6 px-1 sm:px-0">
            A better way for <br className="hidden sm:block" />
            <span className="text-accent">healthcare philanthropy.</span>
          </h1>
          <p className="text-[15px] sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Prysm gives health systems a better way to unlock the full potential of grateful patient philanthropy - turning clinical encounters into qualified major gifts, without adding process for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3.5 rounded-lg sm:rounded-full bg-ink text-white font-medium hover:bg-ink-soft transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer text-sm sm:text-base backface-hidden transform-gpu">
              Request Demo
            </Link>
            <Link to="/platform" className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3.5 rounded-lg sm:rounded-full bg-white/90 backdrop-blur-sm text-ink border border-slate-200 font-medium hover:bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer text-sm sm:text-base backface-hidden transform-gpu">
              Explore the Platform
            </Link>
          </div>
        </div>

        {/* Signature visual: EMR -> Prysm -> CRM bridge */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-xl bg-white border border-slate-200/60 shadow-[0_4px_24px_-8px_rgba(24,22,51,0.08)] pt-6 pb-5 px-4 sm:p-8 lg:p-10 transition-colors duration-300">
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

              <div className="flex items-center justify-center flex-1 relative min-w-[20px] sm:min-w-[40px] px-1 sm:px-2">
                <div className="w-full h-px bg-slate-200"></div>
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent"></div>
              </div>

              <div className="flex-1 text-center flex flex-col items-center justify-center">
                <div className="h-10 sm:h-16 flex items-center justify-center">
                  <img src={prysmIcon} alt="Prysm" className="h-5 sm:h-9 w-auto object-contain" />
                </div>
              </div>

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
    </div>
  )
}