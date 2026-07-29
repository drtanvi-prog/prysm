export const TheOpportunity = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: The Opportunity */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="hairline"></span>
              <span className="eyebrow">The Opportunity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-8">The great wealth transfer</h2>
            <div className="text-7xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ink via-accent to-accent-strong tracking-tight mb-2">
              $124T
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-8">Projected to transfer through 2048</p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              An estimated <strong className="font-semibold text-ink">$18 trillion</strong> of it will flow to charity - a generational opportunity for mission-aligned healthcare fundraising.
            </p>
            <div className="hairline mb-6"></div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Healthcare already receives <strong className="font-semibold text-slate-900">$53B in annual U.S. giving</strong> - one of the largest and fastest-growing charitable categories. Yet most foundations can't reach the opportunity in front of them.
            </p>
          </div>

          {/* Right Column: The Challenges Summary */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 relative group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent-strong rounded-t-2xl"></div>
            <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">Why Most Programs Miss It</div>
            <h3 className="text-2xl font-bold text-ink mb-8">Five challenges stand in the way.</h3>

            <ul className="space-y-6">
              {[
                { title: 'Siloed systems', desc: "patient, donor, and wealth data live in separate places." },
                { title: 'Low data confidence', desc: "leadership can't see what's actually working." },
                { title: 'Identification lag', desc: "high-potential patients aren't surfaced within the gratitude window." },
                { title: 'Staff burnout', desc: "fundraisers spend more time on data than donors." },
                { title: 'Disconnected clinician engagement', desc: "referrals stay informal, with no impact loop." },
              ].map((item, index) => (
                <li key={index} className="flex gap-4 group/item hover:translate-x-1 transition-all duration-200">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-soft text-accent font-bold text-sm group-hover/item:bg-accent group-hover/item:text-white transition-colors duration-200">
                    {index + 1}
                  </div>
                  <div>
                    <span className="font-bold text-ink group-hover/item:text-accent transition-colors duration-200">{item.title}</span> <span className="text-slate-500">- {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 bg-gradient-to-br from-ink to-ink-soft rounded-xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-white/5 blur-xl"></div>
              <p className="font-semibold text-sm leading-relaxed relative z-10">
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