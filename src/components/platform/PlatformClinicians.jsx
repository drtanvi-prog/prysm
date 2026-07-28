export const PlatformClinicians = () => {
  const benefits = [
    {
      title: "Clinician patient panels",
      desc: "Clinicians see their own patients ranked by philanthropic potential. With a click, they can flag a patient or remove one from outreach."
    },
    {
      title: "HIPAA-aligned collaboration",
      desc: "Each role sees exactly the information they need - and nothing more. Built-in access controls and patient opt-out preferences are honored throughout."
    },
    {
      title: "Impact reporting for clinicians",
      desc: "Show clinicians how many of their patients were referred, qualified, and ultimately gave - closing the loop and reinforcing the partnership over time."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Clinician Partnership</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6 leading-tight">
            Built around the clinicians at <span className="text-blue-600">the center of every gift.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Prysm makes it easy for clinicians to identify and refer grateful patients - and builds shared ownership of philanthropy by showing them the difference their referrals make for patient care and the institution's mission.
          </p>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-2xl border border-slate-800">
              <img 
                src="/clinical-patient-enagament.png" 
                alt="Prysm Clinician Dashboard UI" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 px-2">
              <span className="inline-block px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase whitespace-nowrap self-start">Live in Prysm</span>
              <span className="text-sm text-slate-500 font-medium">Clinician & patient engagement - propensity, net worth & model score, by service line.</span>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="w-full lg:w-1/2">
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">What Clinicians Get</div>
            
            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-white shadow-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-950 mb-2">{benefit.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing the Loop Box */}
            <div className="mt-12 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="text-xs font-bold tracking-widest text-blue-600 uppercase whitespace-nowrap">Closing the Loop</div>
              <p className="text-indigo-950 text-sm font-semibold leading-relaxed">
                Reporting impact back to clinicians is what earns the next referral - reinforcing the partnership and compounding results over time.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
