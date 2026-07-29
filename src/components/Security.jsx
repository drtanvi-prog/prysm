export const Security = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">Security &amp; Compliance</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Built for the data boundary your IT team has already approved.
          </h2>
          <p className="text-lg text-slate-500">
            Prysm is a native Salesforce application - your existing institutional security posture, vendor approval, and integration patterns extend to Prysm by default.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-ink mb-4">HIPAA compliance</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Strict access controls and transparent patient opt-out workflows. PHI is handled entirely inside the boundary your security team has already built.</p>
          </div>

          <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-ink mb-4">Salesforce-attested standards</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Inherits independent attestations across SOC 1, SOC 2, SOC 3, ISO 27001, ISO 27017, ISO 27018, and HITRUST.</p>
          </div>

          <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-ink mb-4">Shield encryption &amp; audit</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Leverages Salesforce Shield Platform Encryption, Field Audit Trail, and Event Monitoring to safeguard sensitive patient and donor data.</p>
          </div>

          <div className="bg-slate-50 px-6 py-8 sm:p-10 rounded-2xl border border-slate-200 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-ink mb-4">SSO &amp; field-level security</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Operates with Salesforce-native encryption, single sign-on with your existing identity provider, and robust field-level access control.</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-8 sm:p-10 text-center shadow-sm">
          <p className="text-ink font-medium text-lg flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="bg-accent-soft text-accent-strong font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full">No New Risk Profile</span>
            Because Prysm is native to Salesforce, there's no new vendor risk profile to construct.
          </p>
        </div>
      </div>
    </section>
  )
}