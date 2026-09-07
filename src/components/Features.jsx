export const Features = () => {
  const capabilities = [
    { title: "EMR Integration", desc: "Native sync with Epic, Cerner, and other major EMRs.", num: "01" },
    { title: "AI Prospect Scoring", desc: "ML models surface high-potential patients from encounter data.", num: "02" },
    { title: "Real-Time Dashboards", desc: "360° views of pipeline, activity, and outcomes at every level.", num: "03" },
    { title: "Clinician Engagement", desc: "An 8-step physician workflow to identify and refer patients.", num: "04" },
    { title: "Integrated Calling", desc: "HIPAA-compliant click-to-dial with automatic activity logging.", num: "05" },
    { title: "Geolocation Mapping", desc: "Regional donor mapping for events and field outreach.", num: "06" },
    { title: "Workflow Automation", desc: "End-to-end automation cuts manual work and keeps data clean.", num: "07" },
    { title: "Enterprise Security", desc: "Salesforce-native encryption, SOC 2, HIPAA, SSO, and RBAC.", num: "08" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">What Prysm Does</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink max-w-2xl tracking-tight leading-tight">
            Everything your team needs to grow grateful patient giving.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-3xl leading-relaxed">
            Patient identification, physician partnership, prospect qualification, donor cultivation, and reporting - together in one place, built natively on Salesforce.
          </p>
        </div>

        {/* Value Props Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-ink leading-snug">From Millions of Patients to the Right Opportunities</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              PRYSM turns an enormous patient population into a focused, prioritized pipeline of philanthropic opportunity.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Rather than relying on fundraisers to manually search for prospects across disconnected systems and data, PRYSM helps surface the people and relationships that matter most.
            </p>
            <p className="text-accent-strong font-bold text-sm">Right person. Right context. Right time.</p>
          </div>
          <div className="bg-ink px-6 py-8 sm:p-10 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-white leading-snug">More Than Wealth</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Wealth identifies capacity. It does not identify intent, connection, or timing.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              PRYSM helps organizations understand the broader picture - including a patient's relationship with physicians, programs, facilities, and the health system itself.
            </p>
            <p className="text-white font-semibold text-sm leading-relaxed">
              That context helps philanthropy teams move beyond simply asking “Who has wealth?” Instead, they can ask: “Who has the capacity, connection, and reason to give?”
            </p>
          </div>
          <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-ink leading-snug">Build More Pipeline. Not More Process.</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Healthcare philanthropy teams are being asked to produce greater results with limited resources. PRYSM helps them do more with what they already have - their data, their relationships, their fundraisers, and their clinical partners.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">
              The result is a more systematic and scalable approach to grateful patient fundraising:
            </p>
            <ul className="text-slate-500 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>More qualified opportunities.</li>
              <li>Better use of fundraiser time.</li>
              <li>Stronger physician engagement.</li>
              <li>Greater philanthropic impact.</li>
            </ul>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-6">Program Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-accent/50 hover:shadow-md transition-all duration-200 group">
                <div className="text-slate-400 font-mono text-sm mb-4 font-semibold group-hover:text-accent transition-colors">{cap.num}</div>
                <h5 className="font-bold text-ink mb-2">{cap.title}</h5>
                <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}