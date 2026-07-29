export const TheOpportunity = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: The Opportunity */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="hairline"></span>
              <span className="eyebrow">The Opportunity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-8">The great wealth transfer</h2>
            <div className="text-7xl sm:text-8xl font-light text-ink tracking-tight mb-2">
              $124<span className="text-accent font-semibold">T</span>
            </div>
            <p className="text-sm text-slate-500 uppercase tracking-wide mb-8">Projected to transfer through 2048</p>
            <p className="text-lg text-slate-900 leading-relaxed mb-6">
              An estimated <strong className="font-semibold text-ink">$18 trillion</strong> of it will flow to charity - a generational opportunity for mission-aligned healthcare fundraising.
            </p>
            <div className="hairline mb-6"></div>
            <p className="text-slate-500 leading-relaxed">
              Healthcare already receives <strong className="font-semibold text-slate-900">$53B in annual U.S. giving</strong> - one of the largest and fastest-growing charitable categories. Yet most foundations can't reach the opportunity in front of them.
            </p>
          </div>

          {/* Right Column: The Challenges Summary */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="text-xs font-semibold tracking-wide text-slate-500 uppercase mb-3">Why Most Programs Miss It</div>
            <h3 className="text-2xl font-bold text-ink mb-8">Five challenges stand in the way.</h3>

            <ul className="space-y-6">
              {[
                { title: 'Siloed systems', desc: "patient, donor, and wealth data live in separate places." },
                { title: 'Low data confidence', desc: "leadership can't see what's actually working." },
                { title: 'Identification lag', desc: "high-potential patients aren't surfaced within the gratitude window." },
                { title: 'Staff burnout', desc: "fundraisers spend more time on data than donors." },
                { title: 'Disconnected clinician engagement', desc: "referrals stay informal, with no impact loop." },
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-soft text-accent font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <span className="font-semibold text-ink">{item.title}</span> <span className="text-slate-500">- {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 bg-ink rounded-xl text-white shadow-md">
              <p className="font-medium text-sm leading-relaxed">
                <span className="text-accent-soft font-bold uppercase tracking-wider mr-2">Only Prysm</span>
                closes all five - turning the opportunity into qualified major gifts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}