import { HowItWorks } from '../components/HowItWorks'
import { Features } from '../components/Features'
import { PlatformInAction } from '../components/platform/PlatformInAction'
import { PlatformPipeline } from '../components/platform/PlatformPipeline'
import { PlatformClinicians } from '../components/platform/PlatformClinicians'
import { PlatformIntegrations } from '../components/platform/PlatformIntegrations'
import { PlatformSubNav } from '../components/platform/PlatformSubNav'
import { CTA } from '../components/CTA'
import { useSEO } from '../utils/useSEO'

export const Platform = () => {
  useSEO(
    'Our Platform - Native Salesforce Healthcare CRM',
    'Prysm is an enterprise-wide platform built natively on Salesforce Health Cloud. Securely identify, engage, and qualify major gift prospects.'
  )

  return (
    <div className="bg-white">
      <div className="pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-9 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline"></span>
            <span className="eyebrow">What Prysm Is</span>
            <span className="hairline"></span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-tight leading-tight">
            An enterprise application built natively on Salesforce.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed">
            Not a replacement for your system of record - the grateful-patient intelligence and engagement application that turns clinical encounters into qualified prospects, then hands them back to the CRM you operate.
          </p>

          {/* Architecture Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            <div className="bg-slate-100/50 border border-slate-200 rounded-xl p-8 text-left w-full max-w-[280px] shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Clinical Source</div>
              <div className="text-xl font-bold text-ink mb-1">EMR</div>
              <div className="text-sm text-slate-500">Epic • Cerner • MEDITECH</div>
            </div>

            <div className="text-slate-400 text-2xl md:hidden">↓</div>
            <div className="text-slate-400 text-2xl hidden md:block">→</div>

            <div className="bg-white rounded-xl p-8 text-left w-full max-w-[320px] shadow-lg border-2 border-accent relative">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">SALESFORCE NATIVE</div>
              <div className="text-xs text-accent font-bold uppercase tracking-wider mb-2">The Engine</div>
              <div className="text-2xl font-bold text-ink mb-4">Prysm</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200">Identify</span>
                <span className="px-2 py-1 rounded bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200">Engage clinicians</span>
                <span className="px-2 py-1 rounded bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200">Qualify</span>
                <span className="px-2 py-1 rounded bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200">Outreach</span>
                <span className="px-2 py-1 rounded bg-slate-50 text-xs font-medium text-slate-600 border border-slate-200">Report</span>
              </div>
            </div>

            <div className="text-slate-400 text-2xl md:hidden">↓</div>
            <div className="text-slate-400 text-2xl hidden md:block">→</div>

            <div className="bg-slate-100/50 border border-slate-200 rounded-xl p-8 text-left w-full max-w-[280px] shadow-sm">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Your System of Record</div>
              <div className="text-xl font-bold text-ink mb-2">Donor CRM</div>
              <div className="text-sm text-slate-500">Blackbaud, Salesforce &amp; more</div>
            </div>
          </div>
        </div>
      </div>

      <PlatformSubNav />
      <div id="how-it-works"><HowItWorks /></div>
      <div id="features"><Features /></div>
      <div id="in-action"><PlatformInAction /></div>
      <div id="pipeline"><PlatformPipeline /></div>
      <div id="clinicians"><PlatformClinicians /></div>
      <div id="integrations"><PlatformIntegrations /></div>
      <CTA />
    </div>
  )
}