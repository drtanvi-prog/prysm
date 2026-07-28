export const Security = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">Security & Compliance</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6">
            Built for the data boundary your IT and compliance teams already defined.
          </h2>
          <p className="text-lg text-slate-500">
            Prysm is a native Salesforce application - your existing institutional security posture, vendor approval, and integration patterns extend to Prysm by default.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-950 mb-3">HIPAA compliance</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Strict access controls and transparent patient opt-out workflows. PHI handled inside the boundary your security team has already approved.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-950 mb-3">Salesforce-attested standards</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Inherits independent attestations across SOC 1 / 2 / 3, ISO 27001 / 27017 / 27018, and HITRUST.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-950 mb-3">Shield encryption & audit</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Shield Platform Encryption, Field Audit Trail, and Event Monitoring for sensitive patient and donor data.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-950 mb-3">SSO & field-level security</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Salesforce-native encryption, single sign-on with your existing identity provider, and field-level access control.</p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-center justify-center text-center">
          <p className="text-indigo-950 font-medium">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mr-3">No New Risk Profile</span>
            Because Prysm is native to Salesforce, there's no new vendor risk profile for your team to construct from scratch.
          </p>
        </div>
      </div>
    </section>
  )
}
