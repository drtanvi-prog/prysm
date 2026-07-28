import { Logo } from '../utils/Icons'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-indigo-200 py-16 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 brightness-0 invert opacity-90">
              <Logo />
            </div>
            <p className="text-indigo-200/80 text-sm max-w-sm leading-relaxed">
              Actionable Insight AI builds the data engine for modern healthcare philanthropy. 
              Prysm is the first platform built specifically to bridge the gap between clinicians and fundraising.
            </p>
          </div>
          
          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/platform" className="hover:text-white transition-colors">Platform</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/results" className="hover:text-white transition-colors">Results & Case Studies</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security & Compliance</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-indigo-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-indigo-300">
          <p>© {new Date().getFullYear()} Actionable Insight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built for Healthcare</span>
            <span className="w-1 h-1 rounded-full bg-indigo-700"></span>
            <span>HIPAA Aligned</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
