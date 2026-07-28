import { Security as SecurityComponent } from '../components/Security'
import { CTA } from '../components/CTA'

export const Security = () => {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Enterprise Security</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950 mb-6">
            Built for hospital IT.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            HIPAA compliant, SOC 2 Type II certified, and built natively on Salesforce Health Cloud. 
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <SecurityComponent />
        <CTA />
      </section>
    </div>
  )
}
