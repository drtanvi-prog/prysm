export const PlatformFeatures = () => {
  const coreFeatures = [
    {
      title: "Grateful Patient Pipeline Development",
      description: "Major giving lead generation, Prospect management & research, Discovery visit scheduling, Clinician partnership development, Donor acquisition",
      icon: "/step-1.829c359c.svg"
    },
    {
      title: "Communications",
      description: "E-marketing & newsletters, Annual giving, Event invitations",
      icon: "/step-1.829c359c.svg" 
    },
    {
      title: "List Management & Reporting",
      description: "Hyper segmentation, Patient visit summary analytics, Multi record updates, Track full program KPI's, Automated activity tracking",
      icon: "/step-1.829c359c.svg"
    },
    {
      title: "Native Integrations",
      description: "Wealth screening, Geo-mapping, Machine learning, VOIP calling",
      icon: "/step-1.829c359c.svg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Features Grid */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-800 mb-4">Prysm Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="p-8 text-center flex flex-col items-center">
                <div className="mb-6 text-slate-700">
                  {idx === 0 && (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">{feature.title}</h3>
                <ul className="text-slate-500 text-sm font-light leading-relaxed space-y-2 list-disc list-inside text-left mx-auto">
                  {feature.description.split(', ').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Funnel Graphic */}
        <div className="mb-32 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed">
              Prysm integrates seamlessly with your health system’s EMR and Donor Management System.
            </h2>
          </div>
          <div className="flex-1">
            <img src="/screenshots/integrations.33d1002d.webp" alt="Prysm Integrations Funnel" className="w-full max-w-md mx-auto" />
          </div>
        </div>

        {/* Dedicated Healthcare CRM Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-6">Fuel your major gift pipeline with a dedicated healthcare CRM.</h2>
            <p className="text-slate-500 font-light mb-4 leading-relaxed">
              Provide your non-profit healthcare organization with a process to supercharge Major, Mid-level and Annual Giving pipeline growth + Patient Experience.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Combining sound information with a sustainable process allows organizations to optimize fundraising strategy.
            </p>
          </div>
          <div></div>
        </div>

        {/* 12 Month Post Implementation Results (Arrows) */}
        <div className="mb-32">
          <div className="text-center mb-16 border-b border-slate-200 pb-4">
            <h2 className="text-xs font-bold tracking-widest text-slate-800 uppercase">12 Month Post-Implementation Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { metric: "425%", label: "Introductory Phone Calls" },
              { metric: "475%", label: "Qualification Meetings" },
              { metric: "1,200%", label: "Qualified Patients" },
              { metric: "$1.8M", label: "First Time Grateful Patient Donations (FY18)" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-slate-200 flex flex-col items-center justify-center text-center clip-arrow pt-6 px-6">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-800">{stat.metric}</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-600 mt-2">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Real Time Analytics Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse max-w-6xl mx-auto mb-32">
          <div className="flex justify-center">
             <img src="/screenshots/analyze.85553684.webp" alt="Prysm Real-Time Analytics" className="max-w-full h-auto drop-shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-relaxed">
              Analyze program growth and performance in real time to identify opportunities and maximize results.
            </h2>
          </div>
        </div>

        {/* What would you do with more time? Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
           <div>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-8 leading-relaxed">
              What would you do with more time?
            </h2>
            <div className="mt-8 space-y-6 text-lg">
              <p className="text-slate-500 font-light leading-relaxed">
                Prysm saves fundraisers’ time by delivering on-demand information and a streamlined process for patient outreach. This leads to an exponential increase in discovery visits with patients.
              </p>
              <p className="text-slate-500 font-light leading-relaxed">
                Increased activity = increased philanthropic revenue. It’s really that simple.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
             <img src="/images/phone.9ac62520.jpg" alt="Prysm Mobile App" className="max-w-md w-full h-auto drop-shadow-xl" />
          </div>
        </div>

      </div>

      <style jsx>{`
        .clip-arrow {
          clip-path: polygon(50% 0%, 100% 35%, 85% 35%, 85% 100%, 15% 100%, 15% 35%, 0% 35%);
        }
      `}</style>
    </section>
  )
}
