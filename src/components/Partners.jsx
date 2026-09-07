import React from 'react'
import { FadeUp } from './animations/FadeUp'

import cetrix from '../assets/partners/cetrix.png'
import geopointe from '../assets/partners/geopointe.png'
import talkdesk from '../assets/partners/talkdesk.png'
import wealthengine from '../assets/partners/wealthengine.png'
import windfall from '../assets/partners/windfall.png'

const partners = [
  { name: 'Cetrix', logo: cetrix },
  { name: 'Geopointe', logo: geopointe },
  { name: 'WealthEngine', logo: wealthengine },
  { name: 'Windfall', logo: windfall },
  { name: 'Talkdesk', logo: talkdesk },
]

export const Partners = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.1} as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink mb-6 tracking-tight leading-tight">
            Prysm's Technology Partner Ecosystem
          </FadeUp>
          <FadeUp delay={0.2} className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Leverage multiple cost effective HIPAA compliant integrations to drive exponential increases across all areas of your fundraising enterprise.
          </FadeUp>
        </div>

        {/* Logos Grid */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 md:gap-20">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-10 sm:h-12 md:h-14 object-contain max-w-[140px] sm:max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
