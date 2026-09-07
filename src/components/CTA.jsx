import { Link } from 'react-router-dom'
import soc2Logo from '../assets/compliance/aicpa-soc-2.png'
import hitrustLogo from '../assets/compliance/certification-HITRUST-CSF.webp'
import isoLogo from '../assets/compliance/iso-27001.png'
import salesforceLogo from '../assets/compliance/Salesforce.com_logo.svg.webp'

export const CTA = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Content */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="hairline"></span>
            <span className="eyebrow">Enterprise Enablement</span>
            <span className="hairline"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6 leading-tight">
            See what's possible.
          </h2>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10 px-2 sm:px-0">
            Learn how healthcare foundations use Prysm to bridge the gap between clinical encounters and philanthropic impact - without replacing their existing EMR or CRM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-ink hover:bg-ink-soft text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all shadow-sm text-sm sm:text-base cursor-pointer"
            >
              Request a Demo
            </Link>
            <a
              href="mailto:sales@actionableinsightai.com"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:text-ink hover:bg-slate-50 font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all text-sm sm:text-base"
            >
              sales@actionableinsightai.com
            </a>
          </div>

          {/* Security & Compliance Badges Footer */}
          <div className="pt-8 sm:pt-10 border-t border-slate-200/80">
            <p className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Security & Compliance
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
              {/* Text-based Certifications */}
              <div className="flex flex-col items-center sm:items-start text-left gap-1 sm:border-r sm:border-slate-200/80 sm:pr-8 hidden sm:flex">
                <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">Salesforce-Native</span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">HIPAA Aligned &amp; PHI Protected</span>
              </div>
              
              {/* Visual Logo Badges */}
              <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8">
                <img 
                  src={salesforceLogo} 
                  alt="Salesforce" 
                  className="h-10 sm:h-14 w-auto object-contain mix-blend-multiply"
                />
                <img 
                  src={hitrustLogo} 
                  alt="HITRUST CSF Certified" 
                  className="h-8 sm:h-12 w-auto object-contain mix-blend-multiply"
                />
                <img 
                  src={soc2Logo} 
                  alt="AICPA SOC 2 Type II" 
                  className="h-12 sm:h-16 w-auto object-contain mix-blend-multiply"
                />
                <img 
                  src={isoLogo} 
                  alt="ISO 27001 Certified" 
                  className="h-12 sm:h-16 w-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-6 text-center">
              PHI protected under 45 CFR §164.514(f) • Built natively on Salesforce Health Cloud
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}