import { Link } from 'react-router-dom'
import { useSEO } from '../utils/useSEO'

export const ThankYou = () => {
  useSEO(
    'Thank You - Request Received',
    'Thank you for contacting Prysm. We have received your inquiry and will follow up with you shortly.'
  )

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full bg-white rounded-xl border border-slate-200 p-8 sm:p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-ink mb-4 tracking-tight">
          Request received.
        </h1>
        
        <p className="text-slate-500 text-base leading-relaxed mb-8">
          Thank you for reaching out to explore Prysm. A member of our enablement team will review your inquiry and follow up within 24 business hours to schedule your custom grateful patient program demo.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center bg-ink hover:bg-ink-soft text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm text-sm"
          >
            Return to Homepage
          </Link>
          <Link
            to="/platform"
            className="w-full inline-flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-ink hover:bg-slate-50 font-medium py-3 px-6 rounded-xl transition-all text-sm"
          >
            Explore the Platform
          </Link>
        </div>
      </div>
    </div>
  )
}
