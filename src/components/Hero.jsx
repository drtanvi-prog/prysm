export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 lg:pt-40 lg:pb-48 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
          <div className="relative mt-16 lg:mt-0 opacity-0" style={{ animation: "fadeIn 1.2s ease-out 0.4s forwards" }}>
            <div className="absolute inset-0 bg-slate-100 rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
            <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
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
