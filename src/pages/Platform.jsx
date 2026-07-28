import { HowItWorks } from '../components/HowItWorks'
import { Features } from '../components/Features'
import { CTA } from '../components/CTA'

export const Platform = () => {
  return (
    <div className="bg-white">
      <div className="pt-24 pb-8 bg-indigo-950 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-4">What Prysm Is</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            An enterprise application built natively on Salesforce.
          </h1>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto mb-12">
            Not a replacement for your system of record - the grateful-patient intelligence and engagement application that turns clinical encounters into qualified prospects, then hands them back to the CRM you operate.
          </p>
          
          {/* Architecture Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            <div className="bg-indigo-900/50 border border-indigo-800 rounded-xl p-6 text-left w-64">
              <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider mb-2">Clinical Source</div>
              <div className="text-xl font-bold text-white mb-1">EMR</div>
              <div className="text-sm text-indigo-200">Epic • Cerner • encounter data</div>
            </div>
            
            <div className="text-indigo-400 text-2xl hidden md:block">→</div>
            
            <div className="bg-blue-600 rounded-xl p-6 text-left w-72 shadow-xl shadow-blue-900/20 ring-2 ring-blue-500 ring-offset-4 ring-offset-indigo-950">
              <div className="text-xs text-blue-200 font-bold uppercase tracking-wider mb-2">Prysm • On Salesforce</div>
              <div className="text-2xl font-bold text-white mb-4">Prysm</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-blue-500/50 text-xs font-medium text-white">Identify</span>
                <span className="px-2 py-1 rounded bg-blue-500/50 text-xs font-medium text-white">Engage clinicians</span>
                <span className="px-2 py-1 rounded bg-blue-500/50 text-xs font-medium text-white">Qualify</span>
                <span className="px-2 py-1 rounded bg-blue-500/50 text-xs font-medium text-white">Outreach</span>
                <span className="px-2 py-1 rounded bg-blue-500/50 text-xs font-medium text-white">Report</span>
              </div>
            </div>

            <div className="text-indigo-400 text-2xl hidden md:block">→</div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-left w-64">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Your System of Record</div>
              <div className="text-xl font-bold text-slate-800 mb-2">Donor CRM</div>
              <div className="text-sm text-slate-500">Blackbaud, Salesforce & more - prospects returned ready to solicit</div>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      <Features />
      <CTA />
    </div>
  )
}
