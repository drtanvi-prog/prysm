import { Logo } from '../utils/Icons'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-ink text-slate-400 pt-16 pb-8 border-t border-ink-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 brightness-0 invert opacity-90">
              <Logo />
            </div>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Actionable Insight builds the data engine for modern healthcare philanthropy.
              Prysm is the operational bridge between the clinical encounter and the philanthropic conversation.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/platform" className="text-slate-400 hover:text-white transition-colors">Platform</Link></li>
              <li><Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/results" className="text-slate-400 hover:text-white transition-colors">Results &amp; Case Studies</Link></li>
              <li><Link to="/security" className="text-slate-400 hover:text-white transition-colors">Security &amp; Compliance</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-soft flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Actionable Insight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built for Healthcare</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>HIPAA Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  )
}