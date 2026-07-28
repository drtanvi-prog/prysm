export const TheOpportunity = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: The Opportunity */}
          <div>
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">The Opportunity</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6">The Great Wealth Transfer</h2>
            <div className="text-7xl font-extrabold text-indigo-950 tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 to-blue-600">
              $124T
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Projected to transfer through 2048 - with an estimated <strong>$18 trillion</strong> flowing to charity. A generational opportunity for mission-aligned healthcare fundraising.
            </p>
            <div className="h-px w-16 bg-slate-200 mb-6"></div>
            <p className="text-slate-500">
              Healthcare already receives <strong>$53B in annual U.S. giving</strong> - one of the largest and fastest-growing charitable categories. Yet most foundations can't reach the opportunity in front of them.
            </p>
          </div>

          {/* Right Column: The Challenges */}
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-sm">
            <div className="text-sm font-semibold tracking-wide text-slate-500 uppercase mb-3">Why Most Programs Miss It</div>
            <h3 className="text-2xl font-bold text-indigo-950 mb-8">Five challenges stand in the way.</h3>
            
            <ul className="space-y-6">
              {[
                { title: 'Siloed systems', desc: "patient, donor, and wealth data live in separate places." },
                { title: 'Low data confidence', desc: "leadership can't see what's actually working." },
                { title: 'Identification lag', desc: "high-potential patients aren't surfaced within the gratitude window." },
                { title: 'Staff burnout', desc: "fundraisers spend more time on data than donors." },
                { title: 'Disconnected clinician engagement', desc: "referrals stay informal, with no impact loop." },
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <span className="font-semibold text-indigo-950">{item.title}</span> <span className="text-slate-500">- {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 bg-blue-600 rounded-xl text-white shadow-md">
              <p className="font-medium">
                <span className="opacity-80 text-sm uppercase tracking-wider mr-2 text-blue-100">Only Prysm</span>
                closes all five - turning the opportunity into qualified major gifts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
