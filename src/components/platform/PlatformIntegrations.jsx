import epicLogo from '../../assets/integration/epic-systems.png';
import cernerLogo from '../../assets/integration/Oracle_Cerner_logo.svg.webp';
import salesforceLogo from '../../assets/integration/Salesforce.com_logo.svg.webp';
import blackbaudLogo from '../../assets/integration/blackbaud-vector-logo.png';

export const PlatformIntegrations = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="flex gap-2 items-center justify-center mb-4">
            <span className="hairline"></span>
            <span className="eyebrow">Integrations Ecosystem</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
            Connected to the systems you already use.
          </h2>
          <p className="text-lg text-slate-500">
            Prysm is designed to sit cleanly in the middle of your technology stack, mapping data securely without manual intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* EMR Integrations */}
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-soft mb-8">Clinical Data (EMR)</h3>
            <div className="flex-1 flex flex-col gap-10 w-full items-center justify-center">
              <img src={epicLogo} alt="Epic Systems" className="h-20 object-contain mix-blend-multiply" />
              <img src={cernerLogo} alt="Cerner" className="h-12 object-contain mix-blend-multiply" />
            </div>
            <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-200">
              Native APIs and HL7/FHIR connections pull live encounter data automatically.
            </p>
          </div>

          {/* Core Platform */}
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-soft mb-8">Native Platform</h3>
            <div className="flex-1 flex flex-col gap-4 w-full items-center justify-center">
              <img src={salesforceLogo} alt="Salesforce" className="h-20 object-contain mix-blend-multiply" />
              <div className="text-xl font-semibold text-slate-700">Health Cloud</div>
            </div>
            <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-200">
              Built directly on Salesforce, leveraging Shield encryption and event monitoring.
            </p>
          </div>

          {/* CRM Integrations */}
          <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-soft mb-8">Donor Systems (CRM)</h3>
            <div className="flex-1 flex flex-col gap-6 w-full items-center justify-center">
              <img src={blackbaudLogo} alt="Blackbaud" className="h-16 object-contain mix-blend-multiply" />
            </div>
            <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-200">
              Fully qualified prospects are pushed to your development team's CRM seamlessly.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
