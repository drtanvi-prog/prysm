import { Link } from 'react-router-dom'

export const HomeSolutions = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">The Solution</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6">
              The Operational Bridge between clinical care and philanthropy.
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Prysm is an enterprise application built natively on Salesforce that bridges the gap between your EMR and your Donor CRM. It automatically identifies grateful patients, engages clinicians, qualifies prospects, and hands them off to your fundraisers with full context.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">Native EMR integration (Epic, Cerner)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">AI-driven prospect scoring and qualification</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-slate-700 font-medium">Built-in clinician engagement workflows</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/platform" className="bg-indigo-950 hover:bg-indigo-900 text-white px-6 py-3 rounded-md text-base font-medium transition-colors shadow-sm text-center">
                Explore the Platform
              </Link>
              <Link to="/solutions" className="bg-white hover:bg-slate-50 text-indigo-950 border border-slate-200 px-6 py-3 rounded-md text-base font-medium transition-colors shadow-sm text-center">
                See Role-Based Views
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
            {/* Minimalist Data/Platform representation */}
            <div className="space-y-6 relative z-10">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">EMR System</div>
                    <div className="text-xs text-slate-500">Patient Encounters</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Connected</div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-blue-200"></div>
              </div>

              <div className="bg-indigo-950 p-4 rounded-xl border border-indigo-800 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                  <div>
                    <div className="text-sm font-bold text-white">Prysm Engine</div>
                    <div className="text-xs text-indigo-300">Salesforce Native</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="h-2 bg-indigo-800 rounded w-full"></div>
                  <div className="h-2 bg-indigo-800 rounded w-3/4"></div>
                  <div className="h-2 bg-indigo-800 rounded w-5/6"></div>
                  <div className="h-2 bg-indigo-800 rounded w-full"></div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-blue-200"></div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Donor CRM</div>
                    <div className="text-xs text-slate-500">Major Gifts Team</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">Exporting</div>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 border-[40px] border-slate-50 rounded-full opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
