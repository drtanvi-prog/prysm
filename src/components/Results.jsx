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
    <section className="py-24 bg-indigo-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Story Column */}
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-3">Proven Results</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Measurable impact from year one.</h2>
            
            <div className="space-y-6 text-indigo-200">
              <p>
                Providence Health & Services had everything philanthropy depends on - exceptional clinicians, deeply grateful patients, and a mission built for generosity. What it lacked was a way to see the opportunity.
              </p>
              <p>
                Built natively on Salesforce, Prysm unified that data into a single prospect view, surfaced the highest-potential grateful patients, and turned clinicians into active referral partners.
              </p>
              <p className="font-semibold text-white pt-4">
                The result was measurable in the first year - and a program built to compound, scaling from 4 hospitals to 14, with a clear path to 35.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-indigo-900/40 border border-indigo-800 p-6 rounded-xl hover:bg-indigo-900/60 transition-colors">
                  <div className="text-4xl font-bold text-white mb-2 tracking-tight">{m.value}</div>
                  <div className="text-sm text-indigo-300 font-medium">{m.label}</div>
                </div>
              ))}
              <div className="sm:col-span-2 bg-indigo-900/40 border border-indigo-800 p-6 rounded-xl flex items-center gap-6">
                 <div className="text-4xl font-bold text-blue-400 tracking-tight">480+</div>
                 <div className="text-sm text-indigo-200 font-medium leading-relaxed">
                   Physician partnerships managed across 14 hospitals on &lt;1 FTE
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-indigo-900 border border-indigo-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl">
            <svg className="h-12 w-12 text-blue-300/50 mb-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-8">
              "Prysm gives us real-time visibility into who we haven’t reached yet and keeps us on our best opportunities - actionable analytics our donor management system simply can’t provide."
            </p>
            <div>
              <div className="text-white font-bold">Greg Gissendanner</div>
              <div className="text-blue-200 text-sm mt-1">Associate Chief Philanthropy Officer, Providence Philanthropy, South Division</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
