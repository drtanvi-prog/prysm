import { Link } from 'react-router-dom'
import { PrysmGraphic } from './PrysmGraphic'

export const HomeSolutions = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="hairline"></span>
              <span className="eyebrow">The Solution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink mb-6 tracking-tight leading-tight">
              The operational bridge between clinical care and philanthropy.
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mb-8 leading-relaxed">
              Prysm is an enterprise application built natively on Salesforce that bridges the gap between your EMR and your Donor CRM. It identifies grateful patients, engages clinicians, qualifies prospects, and hands them off to your fundraisers with full context.
            </p>

            <div className="space-y-4 mb-10 max-w-fit mx-auto lg:mx-0 text-left">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/platform" className="bg-ink hover:bg-ink-soft text-white px-6 py-3 rounded-full text-base font-medium transition-colors shadow-sm text-center">
                Explore the Platform
              </Link>
              <Link to="/solutions" className="bg-transparent hover:bg-slate-50 text-ink border border-slate-300 px-6 py-3 rounded-full text-base font-medium transition-colors text-center">
                See Role-Based Views
              </Link>
            </div>
          </div>

          {/* Right Side Visual Block */}
          <div className="relative">
            <PrysmGraphic />
          </div>

        </div>
      </div>
    </section>
  )
}