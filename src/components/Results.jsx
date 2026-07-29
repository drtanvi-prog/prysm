export const Results = () => {
  const metrics = [
    { value: "$4.3M", label: "Raised in first-year first-time gifts" },
    { value: "+1,233%", label: "First-time donations from referred patients" },
    { value: "+305%", label: "Growth in first-time major gifts" },
    { value: "+3,225%", label: "Physician referrals (40 → 1,329)" },
    { value: "471%", label: "Gain in qualification efficiency" },
    { value: "+448%", label: "Growth in first-time discovery calls" },
    { value: "480+", label: "Physician partnerships managed across 14 hospitals using less than 1 FTE" }
  ];

  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Story Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline"></span>
              <span className="eyebrow">Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-tight mb-8 leading-[1.15]">
              Measurable impact <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-strong">from year one.</span>
            </h2>

            <div className="space-y-6 text-slate-500 text-base leading-relaxed">
              <p>
                Providence Health &amp; Services had everything philanthropy depends on - exceptional clinicians, deeply grateful patients, and a mission built for generosity. What it lacked was a way to see the opportunity.
              </p>
              <p>
                Built natively on Salesforce, Prysm unified that data into a single prospect view, surfaced the highest-potential grateful patients, and turned clinicians into active referral partners.
              </p>
              <div className="pt-6 mt-8 border-t border-slate-100">
                <p className="font-semibold text-slate-900">
                  The result was a program built to compound, scaling smoothly <span className="text-accent font-bold">from 4 hospitals to 14</span> on the exact same platform.
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-slate-100 rounded-t-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
              {/* Row 1 */}
              <div className="flex flex-col justify-between p-8 min-h-[160px] hover:bg-slate-50/50 transition-colors">
                <div className="text-5xl font-light text-ink tracking-tight">{metrics[0].value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-4 leading-relaxed">{metrics[0].label}</div>
              </div>
              <div className="flex flex-col justify-between p-8 min-h-[160px] hover:bg-slate-50/50 transition-colors border-t sm:border-t-0">
                <div className="text-5xl font-light text-ink tracking-tight">{metrics[1].value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-4 leading-relaxed">{metrics[1].label}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 border-x border-b border-slate-100 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
              {/* Row 2 */}
              <div className="flex flex-col justify-between p-8 min-h-[160px] hover:bg-slate-50/50 transition-colors">
                <div className="text-5xl font-light text-ink tracking-tight">{metrics[2].value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-4 leading-relaxed">{metrics[2].label}</div>
              </div>
              <div className="flex flex-col justify-between p-8 min-h-[160px] hover:bg-slate-50/50 transition-colors border-t sm:border-t-0">
                <div className="text-5xl font-light text-ink tracking-tight">{metrics[3].value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-4 leading-relaxed">{metrics[3].label}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-x border-b border-slate-100 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
              {/* Row 3 */}
              <div className="flex flex-col justify-between p-8 min-h-[160px] hover:bg-slate-50/50 transition-colors">
                <div className="text-5xl font-light text-ink tracking-tight">{metrics[4].value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-4 leading-relaxed">{metrics[4].label}</div>
              </div>
              <div className="flex flex-col justify-between p-8 min-h-[160px] hover:bg-slate-50/50 transition-colors border-t sm:border-t-0">
                <div className="text-5xl font-light text-ink tracking-tight">{metrics[5].value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-4 leading-relaxed">{metrics[5].label}</div>
              </div>
            </div>

            {/* Featured Row 4 */}
            <div className="border-x border-b border-slate-100 rounded-b-2xl overflow-hidden bg-slate-50/30 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between hover:bg-slate-50/70 transition-colors">
              <div className="text-6xl font-extrabold text-accent tracking-tight">{metrics[6].value}</div>
              <div className="text-sm font-medium text-slate-600 leading-relaxed max-w-md sm:text-right sm:ml-auto">
                {metrics[6].label}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-24 border-t border-slate-100 pt-16 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-6xl text-accent-soft font-serif leading-none block mb-4">“</span>
            <p className="text-2xl sm:text-3xl font-light text-slate-900 leading-relaxed mb-8">
              Prysm gives us real-time visibility into who we haven't reached yet and keeps us on our best opportunities - actionable analytics our donor management system simply can't provide.
            </p>
            <div>
              <div className="text-ink font-bold text-lg">Greg Gissendanner</div>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">Associate Chief Philanthropy Officer, Providence Philanthropy, South Division</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}