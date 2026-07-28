export const HowItWorks = () => {
  const steps = [
    { title: "Identify grateful patients" },
    { title: "Engage clinicians" },
    { title: "Qualify prospects" },
    { title: "Hand off to your CRM" },
    { title: "Report impact back" }
  ];

  return (
    <section className="py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">How it works</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6">Prysm closes the loop every other system leaves open.</h2>
          <p className="text-slate-500 text-lg">
            A repeatable engine for grateful patient philanthropy - where reporting impact back to clinicians is what earns the next referral.
          </p>
        </div>

        {/* Pipeline Visual */}
        <div className="relative mt-16 mb-20 hidden md:block">
          {/* Connecting Line */}
          <div className="absolute top-6 left-[10%] w-[80%] h-0.5 bg-indigo-200 -translate-y-1/2 z-0"></div>
          
          <div className="flex justify-between relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-1/5">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mb-4 shadow-lg">
                  {i + 1}
                </div>
                <div className="text-center text-sm font-medium text-slate-600 px-2">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pipeline */}
        <div className="md:hidden space-y-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
               <div className="w-10 h-10 flex-shrink-0 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
                  {i + 1}
                </div>
                <div className="font-medium text-indigo-950">
                  {step.title}
                </div>
            </div>
          ))}
        </div>

        {/* Comparison Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold text-indigo-950 mb-3">AI tools</h4>
            <p className="text-slate-500 text-sm leading-relaxed">surface prospects - but can't manage the clinician partnership.</p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold text-indigo-950 mb-3">Donor CRMs</h4>
            <p className="text-slate-500 text-sm leading-relaxed">hold the data - but never report results back.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl border-2 border-indigo-900 shadow-sm flex items-center">
            <h4 className="text-2xl font-bold text-indigo-950">Only Prysm does both.</h4>
          </div>
        </div>

      </div>
      
      
    </section>
  )
}
