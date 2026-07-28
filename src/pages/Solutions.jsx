import { CTA } from '../components/CTA'
import { PageHeader } from '../components/PageHeader'

export const Solutions = () => {
  return (
    <div className="bg-white">
      
      <PageHeader
        label="Built for the team"
        title="Four roles. One unified reality."
        subtitle="Every user sees the same patient record, filtered to show exactly the data their role needs to execute the next best action."
      />

      {/* Solutions Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Fundraisers */}
            <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm flex flex-col h-full">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Frontline</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-6">Fundraisers</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-500 leading-relaxed text-sm">Program onboarding time reduced by 90 percent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-500 leading-relaxed text-sm">A clear, repeatable process for engaging clinicians, patients, and unqualified prospects.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-500 leading-relaxed text-sm">A well-structured qualification portfolio with complete context on every prospect.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <p className="font-semibold text-slate-800 text-sm">Outcome: <span className="text-blue-600 font-bold">More time</span> in donor visits.</p>
              </div>
            </div>

            {/* Prospect Research */}
            <div className="bg-white border-2 border-indigo-900 rounded-2xl p-10 shadow-md flex flex-col h-full">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Advancement Services</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-6">Prospect Research</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-indigo-950 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-600 leading-relaxed text-sm">Reach qualified prospects in a fraction of the time, drawn directly from clinical data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-950 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-600 leading-relaxed text-sm">Open every prospect with the full picture (wealth, affinity, care experience).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-950 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-600 leading-relaxed text-sm">Work inside a data model purpose-built for healthcare philanthropy.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-200 mt-auto">
                <p className="font-semibold text-indigo-950 text-sm">Outcome: <span className="font-bold">Faster</span> qualification.</p>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm flex flex-col h-full">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Philanthropy Leadership</div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-6">Chief Development Officers</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-500 leading-relaxed text-sm">Real-time visibility into the best philanthropic opportunities across the clinical landscape.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-500 leading-relaxed text-sm">Democratized analytics and outcome reporting that keep every stakeholder aligned.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                  <span className="text-slate-500 leading-relaxed text-sm">A clear, data-driven roadmap to sustainable philanthropic growth.</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <p className="font-semibold text-slate-800 text-sm">Outcome: <span className="text-blue-600 font-bold">Real pipeline data</span>, not anecdotes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinician Partnership with 8-Step Workflow */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Clinician Partnership</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mb-6">
              Built around the clinicians at the center of every gift.
            </h2>
            <p className="text-lg text-slate-500">
              Prysm makes it easy for clinicians to identify and refer grateful patients, building shared ownership of philanthropy through a strict 8-step workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: The 8-Step Workflow */}
            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-indigo-950 mb-8 border-b border-slate-100 pb-4">The 8-Step Physician Workflow</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Patient registers for appointment</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Nightly HL7 payload maps data to Prysm</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Patient wealth screening appended automatically</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">4</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Physician receives secure briefing on upcoming qualified patients</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">5</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Physician identifies patient displaying gratitude</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">6</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">One-click secure referral submitted</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">7</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Development officer qualifies and accepts the handoff</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">8</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">Impact and progress reported back to referring physician</p>
                </div>
              </div>
            </div>
            
            {/* Right: Key Features */}
            <div className="space-y-12 lg:pt-8">
              <div>
                <h4 className="text-xl font-bold text-indigo-950 mb-3">Clinician patient panels</h4>
                <p className="text-slate-500 leading-relaxed">Clinicians see their own patients ranked by philanthropic potential. With a click, they can flag a patient or remove one from outreach.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-indigo-950 mb-3">HIPAA-aligned collaboration</h4>
                <p className="text-slate-500 leading-relaxed">Each role sees exactly the information they need - and nothing more. Built-in access controls and patient opt-out preferences are honored throughout.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-indigo-950 mb-3">Impact reporting for clinicians</h4>
                <p className="text-slate-500 leading-relaxed">Show clinicians how many of their patients were referred, qualified, and ultimately gave - closing the loop and reinforcing the partnership over time.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
