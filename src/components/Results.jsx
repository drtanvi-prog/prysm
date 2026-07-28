export const Results = () => {
  const metrics = [
    { value: "$4.3M", label: "Raised in first-year first-time gifts" },
    { value: "+1,233%", label: "First-time donations from referred patients" },
    { value: "+305%", label: "Growth in first-time major gifts" },
    { value: "+3,225%", label: "Physician referrals (40 → 1,329)" },
    { value: "471%", label: "Gain in qualification efficiency" },
    { value: "+448%", label: "Growth in first-time discovery calls" }
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Story Column */}
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Proven Results</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-indigo-950">Measurable impact from year one.</h2>
            
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
              <p>
                Providence Health & Services had everything philanthropy depends on - exceptional clinicians, deeply grateful patients, and a mission built for generosity. What it lacked was a way to see the opportunity.
              </p>
              <p>
                Built natively on Salesforce, Prysm unified that data into a single prospect view, surfaced the highest-potential grateful patients, and turned clinicians into active referral partners.
              </p>
              <p className="font-semibold text-slate-800 pt-4 border-t border-slate-100">
                The result was a program built to compound, scaling smoothly <span className="text-blue-600">from 4 hospitals to 14</span> on the exact same platform.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {metrics.map((m, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-indigo-200 transition-colors">
                  <div className="text-4xl font-bold text-indigo-950 mb-3 tracking-tight">{m.value}</div>
                  <div className="text-sm text-slate-600 font-medium leading-relaxed">{m.label}</div>
                </div>
              ))}
              <div className="sm:col-span-2 bg-indigo-950 border border-indigo-900 p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                 <div className="text-5xl font-bold text-blue-400 tracking-tight shrink-0">480+</div>
                 <div className="text-sm text-indigo-200 font-medium leading-relaxed max-w-sm mt-2 sm:mt-0">
                   Physician partnerships managed seamlessly across 14 hospitals using less than 1 FTE.
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-white border border-slate-200 rounded-2xl p-10 sm:p-16 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <svg className="h-12 w-12 text-blue-100 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-2xl sm:text-3xl font-light text-slate-800 leading-relaxed mb-10">
              "Prysm gives us real-time visibility into who we haven’t reached yet and keeps us on our best opportunities - actionable analytics our donor management system simply can’t provide."
            </p>
            <div>
              <div className="text-indigo-950 font-bold text-lg">Greg Gissendanner</div>
              <div className="text-slate-500 text-sm mt-1">Associate Chief Philanthropy Officer, Providence Philanthropy, South Division</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
