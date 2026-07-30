export const PlatformPipeline = () => {
  const sources = [
    { title: "Grateful Patients & Families", desc: "EMR encounter history" },
    { title: "Clinicians & Staff", desc: "Physician partnership" },
    { title: "Community Supporters", desc: "Events & foundation outreach" },
    { title: "Board Members & Trustees", desc: "Leadership network" },
    { title: "Lapsed Donors", desc: "CRM giving history" }
  ];

  const results = [
    { 
      metric: "3,225%", 
      stage: "IDENTIFY", 
      desc: "Growth in physician referrals (40 → 1,329)"
    },
    { 
      metric: "448%", 
      stage: "ENGAGE", 
      desc: "Growth in first-time discovery calls"
    },
    { 
      metric: "471%", 
      stage: "QUALIFY", 
      desc: "Gain in prospect qualification efficiency"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex gap-2 items-center mb-4">
            <span className="hairline"></span>
            <span className="eyebrow">The Sustainable Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
            Every constituent, every signal - into one qualified pipeline.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Solicitation-ready prospects, returned to the donor CRM you already run.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left: Sources */}
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Every source in one place</div>
            <div className="space-y-3">
              {sources.map((source, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-accent/40 transition-colors">
                  <h4 className="font-bold text-ink text-sm mb-1">{source.title}</h4>
                  <p className="text-xs text-slate-500">{source.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: CSS Funnel */}
          <div className="flex flex-col items-center justify-center">
            {/* Arrows */}
            <div className="flex gap-6 text-slate-400 font-bold text-xl mb-4">
              <span>↓</span>
              <span>↓</span>
              <span>↓</span>
            </div>
            
            {/* Top Bar */}
            <div className="w-64 h-2 bg-slate-200 rounded-full mb-4"></div>
            
            {/* Funnel Shape */}
            <div 
              className="bg-gradient-to-b from-accent to-accent-strong flex flex-col justify-between py-12 text-white font-bold text-center tracking-widest shadow-lg"
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)', width: '280px', height: '320px' }}
            >
              <div className="text-lg">IDENTIFY</div>
              <div className="text-lg">ENGAGE</div>
              <div className="text-lg">QUALIFY</div>
            </div>
          </div>

          {/* Right: Results */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Measured Results</span>
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase px-2 py-1 bg-white border border-slate-200 rounded-full">Case Study</span>
            </div>
            
            <div className="space-y-0">
              {results.map((res, idx) => (
                <div key={idx} className={`py-6 ${idx !== results.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-bold text-ink">{res.metric}</span>
                    <span className="text-xs font-bold text-accent tracking-wider uppercase">{res.stage}</span>
                  </div>
                  <p className="text-sm text-slate-500">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="bg-accent rounded-xl p-6 text-center shadow-md">
          <p className="text-white font-medium text-lg">
            Returned to the donor CRM you already run - <span className="font-bold">solicitation-ready.</span>
          </p>
        </div>

      </div>
    </section>
  )
}
