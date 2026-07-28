import { CTA } from '../components/CTA'

export const Solutions = () => {
  return (
    <div className="bg-white">
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Built for the team</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950 mb-6">
            Built for the people who raise the gifts.
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Four roles. Four views of the same patient record. Each one shows just the information that role needs to do its best work.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Fundraisers */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Frontline</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-6">Fundraisers</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">Program onboarding time reduced by 90 percent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">A clear, repeatable process for engaging clinicians, patients, and unqualified prospects.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">A well-structured qualification portfolio with complete context on every prospect.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="font-semibold text-slate-800"><span className="text-blue-600">More time</span> in donor visits.</p>
              </div>
            </div>

            {/* Prospect Research */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Advancement Services</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-6">Prospect Research</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">Reach qualified prospects in a fraction of the time, as Prysm draws them directly from clinical data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">Open every prospect with the full picture already in front of you (wealth, affinity, care experience).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">Work inside a data model purpose-built for healthcare philanthropy.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="font-semibold text-slate-800"><span className="text-blue-600">Faster</span> qualification.</p>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Philanthropy Leadership</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-6">Chief Development Officers</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">Real-time visibility into the best philanthropic opportunities across the clinical landscape.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">Democratized analytics and outcome reporting that keep every stakeholder on the same page.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-slate-600">A clear, data-driven roadmap to sustainable philanthropic growth.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100">
                <p className="font-semibold text-slate-800"><span className="text-blue-600">Real pipeline data</span>, not anecdotes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinician Partnership */}
      <section className="py-24 bg-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-4">Clinician Partnership</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Built around the clinicians at <span className="text-blue-400">the center of every gift.</span>
              </h2>
              <p className="text-lg text-indigo-200 mb-10">
                Prysm makes it easy for clinicians to identify and refer grateful patients - and builds shared ownership of philanthropy by showing them the difference their referrals make for patient care and the institution's mission.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Clinician patient panels</h4>
                    <p className="text-indigo-200">Clinicians see their own patients ranked by philanthropic potential. With a click, they can flag a patient or remove one from outreach.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">HIPAA-aligned collaboration</h4>
                    <p className="text-indigo-200">Each role sees exactly the information they need - and nothing more. Built-in access controls and patient opt-out preferences are honored throughout.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Impact reporting for clinicians</h4>
                    <p className="text-indigo-200">Show clinicians how many of their patients were referred, qualified, and ultimately gave - closing the loop and reinforcing the partnership over time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Clinician Image Placeholder */}
            <div className="bg-indigo-900 rounded-2xl p-4 shadow-2xl ring-1 ring-white/10">
              <div className="aspect-w-4 aspect-h-3 bg-indigo-950 rounded-xl flex items-center justify-center p-8">
                 <div className="text-center">
                   <div className="text-sm text-indigo-300 uppercase tracking-widest font-bold mb-2">Closing the loop</div>
                   <div className="text-xl text-white font-medium italic">"Reporting impact back to clinicians is what earns the next referral - reinforcing the partnership and compounding results over time."</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
