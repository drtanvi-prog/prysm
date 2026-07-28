import providenceLogo from '../assets/integration/providence-health-services.svg';
import cityOfHopeLogo from '../assets/integration/city-of-hope-logo-vector.png';
import lsuHealthLogo from '../assets/integration/lsu-health-sciences-center-new-orleans-logo-brand-product-design-png-favpng-MQGePmn6RGsC2b3fhkBN0HJmC.jpg';
import rutgersLogo from '../assets/integration/Rutgers-Health-Lockup_Horizontal_Red-and-Black_RGB.svg';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 lg:pt-40 lg:pb-20" style={{background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(219,234,254,0.4) 0%, rgba(255,255,255,0) 70%), #ffffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              The Operational Bridge
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950 tracking-tight leading-[1.15] mb-6">
              A better way for healthcare <span className="text-blue-600">philanthropy.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
              Prysm gives health systems a better way to intelligently unlock the full potential of grateful patient philanthropy-turning clinical encounters into qualified major gifts.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-indigo-950 text-white font-medium hover:bg-indigo-900 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer">
                Request Demo
              </button>
              <button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-0.5 hover:shadow-md shadow-sm cursor-pointer">
                Explore the Platform
              </button>
            </div>
          </div>

          {/* Image / Dashboard Mockup */}
          <div className="relative mt-16 lg:mt-0">
            <div className="absolute inset-0 bg-blue-50 rounded-3xl transform translate-x-4 translate-y-4 opacity-60"></div>
            <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
              {/* Window Controls Mac-style */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <div className="w-3 h-3 rounded-full bg-red-300"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
              </div>
              <img 
                src="/clinical_dashboard.png" 
                alt="PRYSM Clinical Dashboard" 
                className="w-full h-auto object-cover border-b border-slate-100"
              />
            </div>
          </div>

        </div>
        
        {/* Trusted By Banner */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-center text-sm font-semibold tracking-wider text-slate-400 uppercase mb-8">Trusted by leading health systems</p>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
            <img src={providenceLogo} alt="Providence Health" className="h-8 sm:h-10 object-contain mix-blend-multiply" />
            <img src={cityOfHopeLogo} alt="City of Hope" className="h-8 sm:h-10 object-contain mix-blend-multiply" />
            <img src={lsuHealthLogo} alt="LSU Health" className="h-10 sm:h-12 object-contain mix-blend-multiply" />
            <img src={rutgersLogo} alt="Rutgers Health" className="h-8 sm:h-10 object-contain mix-blend-multiply" />
          </div>
        </div>
      </div>

    </section>
  )
}
