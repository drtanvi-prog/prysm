import { HowItWorks } from '../components/HowItWorks'
import { Features } from '../components/Features'
import { PlatformIntegrations } from '../components/platform/PlatformIntegrations'
import { CTA } from '../components/CTA'

export const Platform = () => {
  return (
    <div className="bg-white">
      <div className="pt-32 pb-16 bg-white border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">What Prysm Is</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950 mb-6">
            An enterprise application built natively on Salesforce.
          </h1>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-20 leading-relaxed">
            Not a replacement for your system of record - the grateful-patient intelligence and engagement application that turns clinical encounters into qualified prospects, then hands them back to the CRM you operate.
          </p>
          
          {/* Architecture Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-left w-64 shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Clinical Source</div>
              <div className="text-xl font-bold text-indigo-950 mb-1">EMR</div>
              <div className="text-sm text-slate-500">Epic • Cerner • MEDITECH</div>
            </div>
            
            <div className="text-slate-300 text-2xl hidden md:block">→</div>
            
            <div className="bg-white rounded-xl p-8 text-left w-72 shadow-lg border-2 border-indigo-900 relative">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">SALESFORCE NATIVE</div>
              <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">The Engine</div>
              <div className="text-2xl font-bold text-indigo-950 mb-4">Prysm</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Identify</span>
                <span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Engage clinicians</span>
                <span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Qualify</span>
                <span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Outreach</span>
                <span className="px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Report</span>
              </div>
            </div>

            <div className="text-slate-300 text-2xl hidden md:block">→</div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-left w-64 shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Your System of Record</div>
              <div className="text-xl font-bold text-indigo-950 mb-2">Donor CRM</div>
              <div className="text-sm text-slate-500">Blackbaud, Salesforce & more</div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      <Features />
      <PlatformIntegrations />
      <CTA />
    </div>
  )
}
