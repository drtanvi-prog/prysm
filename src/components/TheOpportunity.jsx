import { FadeUp } from './animations/FadeUp'

export const TheOpportunity = () => {
  const challenges = [
    { title: 'Siloed systems', desc: "Patient, donor, and wealth data live in separate places." },
    { title: 'Low data confidence', desc: "Leadership can't see what's actually working." },
    { title: 'Identification lag', desc: "High-potential patients aren't surfaced within the gratitude window." },
    { title: 'Staff burnout', desc: "Fundraisers spend more time on data than donors." },
    { title: 'Disconnected clinician engagement', desc: "Referrals stay informal, with no impact loop." },
  ]

  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-20 lg:pb-32 bg-white relative border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="text-center mb-16 sm:mb-24">
          <FadeUp delay={0.1}>
            <span className="text-slate-400 uppercase tracking-widest text-xs font-bold block mb-4">The Challenges</span>
          </FadeUp>
          <FadeUp delay={0.2} as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-[1.15] mb-6">
            Prysm solves philanthropy's top five challenges.
          </FadeUp>
          <FadeUp delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-500 leading-relaxed">
              <span className="text-accent font-bold">ONLY PRYSM</span> closes all five - turning the opportunity into qualified major gifts.
            </p>
          </FadeUp>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((item, index) => {
            const colors = [
              'bg-blue-50 text-blue-600',
              'bg-indigo-50 text-indigo-600',
              'bg-violet-50 text-violet-600',
              'bg-fuchsia-50 text-fuchsia-600',
              'bg-rose-50 text-rose-600'
            ];
            const colorClass = colors[index % colors.length];
            
            return (
              <FadeUp key={index} delay={0.1 + (index * 0.1)} className="group border border-slate-200 rounded-xl bg-white hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden flex flex-col">
                <div className={`font-mono text-sm tracking-wider p-4 font-semibold transition-colors ${colorClass}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="p-6 pt-5 flex-1">
                  <h3 className="text-lg font-bold text-ink mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  )
}