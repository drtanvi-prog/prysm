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
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">What Prysm Does</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 max-w-2xl">
            Everything your team needs to grow grateful patient giving.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-3xl">
            Patient identification, physician partnership, prospect qualification, donor cultivation, and reporting - together in one place, built natively on Salesforce.
          </p>
        </div>

        {/* Value Props Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">For the team</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-950">Insight</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Shared visibility for everyone in the program - from the development officer making calls to the Chief Development Officer briefing the board.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">For the day's work</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-950">Efficiency</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Time-consuming work - list-building, screening, call logging, hand-offs - is handled in the background, so fundraisers can focus on donor relationships.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">For the program</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-950">Partnership</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Fundraisers, physicians, and foundation leadership working from the same patient view - as a coordinated team, with the right information for each role.</p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-6">Program Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
                <div className="text-slate-300 font-mono text-sm mb-4 font-semibold group-hover:text-blue-500 transition-colors">{cap.num}</div>
                <h5 className="font-bold text-indigo-950 mb-2">{cap.title}</h5>
                <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
