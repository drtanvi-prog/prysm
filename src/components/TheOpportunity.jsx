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
    <section className="py-24 sm:py-32 lg:py-40 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeUp delay={0.1}>
              <span className="text-slate-400 uppercase tracking-widest text-xs font-bold block mb-6">The Solution</span>
            </FadeUp>
            <FadeUp delay={0.2} as="h2" className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight leading-[1.1] mb-10">
              Prysm solves philanthropy's top five challenges.
            </FadeUp>
            <FadeUp delay={0.3} className="hidden lg:block">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-ink font-medium leading-relaxed">
                  <span className="text-accent font-bold">ONLY PRYSM</span> closes all five - turning the opportunity into qualified major gifts.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Clean List */}
          <div className="lg:col-span-7">
            <div className="space-y-12">
              {challenges.map((item, index) => (
                <FadeUp key={index} delay={0.1 + (index * 0.1)} className="flex gap-6 sm:gap-8">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-lg font-bold text-slate-400 bg-white shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-ink mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Mobile Conclusion (Hidden on Desktop) */}
            <FadeUp delay={0.6} className="mt-16 lg:hidden">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center sm:text-left">
                <p className="text-ink font-medium leading-relaxed">
                  <span className="text-accent font-bold">ONLY PRYSM</span> closes all five - turning the opportunity into qualified major gifts.
                </p>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}