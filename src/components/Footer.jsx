import { Link } from 'react-router-dom'
import prysmLogoLight from '../assets/icons/prysm-icon-light.svg'

export const Footer = () => {
  return (
    <footer className="relative bg-ink text-slate-400 pt-16 pb-8 overflow-hidden">
      {/* signature spectrum hairline along the top edge */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0e9a8f] via-[#4f56c9] to-[#c23d8f]"
        aria-hidden="true"
      />
      {/* very soft purple glow, bottom-left, so the navy isn't a flat void */}
      <div
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(79,86,201,0.16) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 12-col grid: brand 5 / product 2 / company 2 / get-started 3 */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-2 mb-5 text-white">
              <div className="overflow-hidden w-6 h-6 flex items-center justify-start">
                <img src={prysmLogoLight} alt="" aria-hidden="true" className="h-6 w-auto max-w-none object-left" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">Prysm</span>
                <span className="text-[11px] font-medium text-slate-400 leading-none mt-0.5 tracking-wide">by Actionable Insight</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Actionable Insight builds the data engine for modern healthcare philanthropy.
              Prysm is the operational bridge between the clinical encounter and the philanthropic conversation.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Product</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/platform" className="text-slate-400 hover:text-white transition-colors">Platform</Link></li>
              <li><Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/results" className="text-slate-400 hover:text-white transition-colors">Results &amp; Case Studies</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Get started - fills the former dead zone with the one action that matters */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Get started</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              See what your grateful patient program could look like.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-ink text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              Request Demo
            </Link>
            <a
              href="mailto:sales@actionableinsightai.com"
              className="block mt-4 text-sm text-slate-400 hover:text-white transition-colors"
            >
              sales@actionableinsightai.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Actionable Insight. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built for Healthcare</span>
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            <span>HIPAA Aligned</span>
            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
            <span>Salesforce Native</span>
          </div>
        </div>
      </div>
    </footer>
  )
}