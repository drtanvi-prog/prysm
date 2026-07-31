import { Link } from 'react-router-dom'
import prysmIcon from '../assets/icons/prysm-icon-dark.svg'

export const HomeSolutions = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="hairline"></span>
              <span className="eyebrow">The Solution</span>
              <span className="hairline"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
              The operational bridge between clinical care and philanthropy.
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Prysm is an enterprise application built natively on Salesforce that bridges the gap between your EMR and your Donor CRM. It identifies grateful patients, engages clinicians, qualifies prospects, and hands them off to your fundraisers with full context.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Native EMR integration (Epic, Cerner)",
                "AI-driven prospect scoring and qualification",
                "Built-in clinician engagement workflows",
              ].map((line) => (
                <div key={line} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-accent-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-900 font-medium">{line}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform" className="bg-ink hover:bg-ink-soft text-white px-6 py-3 rounded-lg text-base font-medium transition-colors shadow-sm text-center">
                Explore the Platform
              </Link>
              <Link to="/solutions" className="bg-transparent hover:bg-slate-50 text-ink border border-slate-300 px-6 py-3 rounded-lg text-base font-medium transition-colors text-center">
                See Role-Based Views
              </Link>
            </div>
          </div>

          {/* Right Side Visual Block */}
          <div className="bg-white p-8 sm:p-10 rounded-md border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="space-y-5 relative z-10">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">EMR System</div>
                    <div className="text-xs text-slate-500">Patient Encounters</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-accent bg-accent-soft px-2 py-1 rounded">Connected</div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-slate-300"></div>
              </div>

              <div className="bg-ink p-4 rounded-xl border border-ink-soft shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-lg border border-slate-200/80 flex items-center justify-center overflow-hidden">
                    <div className="w-6 h-6 overflow-hidden flex items-center justify-start">
                      <img 
                        src={prysmIcon} 
                        alt="Prysm" 
                        className="h-full w-auto max-w-none object-cover" 
                        style={{ objectPosition: 'left center' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Prysm Engine</div>
                    <div className="text-xs text-slate-300">Salesforce Native</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="h-2 bg-ink-soft rounded w-full"></div>
                  <div className="h-2 bg-ink-soft rounded w-3/4"></div>
                  <div className="h-2 bg-ink-soft rounded w-5/6"></div>
                  <div className="h-2 bg-ink-soft rounded w-full"></div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-slate-300"></div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Donor CRM</div>
                    <div className="text-xs text-slate-500">Major Gifts Team</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-accent-strong bg-accent-soft px-2 py-1 rounded">Exporting</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}