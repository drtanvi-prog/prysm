import { Logo } from '../utils/Icons'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        
        <div className="text-sm text-slate-500 flex flex-wrap gap-6 justify-center">
          <Link to="/results" className="hover:text-indigo-950 transition-colors">Results & Case Studies</Link>
          <Link to="/security" className="hover:text-indigo-950 transition-colors">Security & Compliance</Link>
          <a href="/privacy" className="hover:text-indigo-950 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-indigo-950 transition-colors">Terms of Service</a>
          <span>© {new Date().getFullYear()} Actionable Insight. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
