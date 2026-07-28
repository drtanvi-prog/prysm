export const Security = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Security & Compliance</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mb-6">
            Built for the data boundary your IT team has already approved.
          </h2>
          <p className="text-lg text-slate-500">
            Prysm is a native Salesforce application - your existing institutional security posture, vendor approval, and integration patterns extend to Prysm by default.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-bold text-indigo-950 mb-4">HIPAA compliance</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Strict access controls and transparent patient opt-out workflows. PHI is handled entirely inside the boundary your security team has already built.</p>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-bold text-indigo-950 mb-4">Salesforce-attested standards</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Inherits independent attestations across SOC 1, SOC 2, SOC 3, ISO 27001, ISO 27017, ISO 27018, and HITRUST.</p>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-bold text-indigo-950 mb-4">Shield encryption & audit</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Leverages Salesforce Shield Platform Encryption, Field Audit Trail, and Event Monitoring to safeguard sensitive patient and donor data.</p>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl font-bold text-indigo-950 mb-4">SSO & field-level security</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Operates with Salesforce-native encryption, single sign-on with your existing identity provider, and robust field-level access control.</p>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-900 rounded-2xl p-10 text-center shadow-sm">
          <p className="text-indigo-950 font-medium text-lg flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="bg-blue-50 text-blue-600 font-bold uppercase tracking-wider text-sm px-3 py-1 rounded">No New Risk Profile</span>
            Because Prysm is native to Salesforce, there's no new vendor risk profile to construct.
          </p>
        </div>
      </div>
    </section>
  )
}
