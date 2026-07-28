export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-32 sm:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl opacity-0 animate-fade-in-up" style={{ animation: "fadeInUp 0.8s ease-out forwards" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              The Operational Bridge
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950 tracking-tight leading-[1.15] mb-6">
              A better way for healthcare <span className="text-blue-600">philanthropy.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
              Prysm gives health systems a better way to intelligently unlock the full potential of grateful patient philanthropy-turning clinical encounters into qualified major gifts.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-md bg-indigo-950 text-white font-medium hover:bg-indigo-900 transition-colors shadow-sm cursor-pointer">
                Request Demo
              </button>
              <button className="px-6 py-3 rounded-md bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
                Explore the Platform
              </button>
            </div>
          </div>

          {/* Image / Dashboard Mockup */}
          <div className="relative mt-12 lg:mt-0 opacity-0" style={{ animation: "fadeIn 1.2s ease-out 0.4s forwards" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
              {/* Window Controls Mac-style */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
              <img 
                src="/clinical_dashboard.png" 
                alt="PRYSM Clinical Dashboard" 
                className="w-full h-auto object-cover border-b border-slate-100"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-5 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#312e81" d="M47.7,-57.2C59.4,-47.3,64.8,-29.6,65.8,-12.3C66.8,5,63.4,21.8,54.5,35.4C45.6,48.9,31.2,59.1,14.6,63.1C-2,67.1,-20.9,64.8,-36.8,56.3C-52.7,47.8,-65.7,33.1,-70.7,15.7C-75.7,-1.8,-72.7,-21.9,-62,-37.6C-51.3,-53.4,-33,-64.8,-15.5,-69.1C2,-73.4,19.5,-70.7,36,-67.2C36.1,-67.2,36.1,-67.2,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  )
}
