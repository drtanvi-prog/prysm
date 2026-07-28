import { PlatformHero } from '../components/platform/PlatformHero'
import { PlatformFeatures } from '../components/platform/PlatformFeatures'
import { PlatformIntegrations } from '../components/platform/PlatformIntegrations'
import { PlatformCaseStudy } from '../components/platform/PlatformCaseStudy'
import { PlatformTestimonial } from '../components/platform/PlatformTestimonial'
import { CTA } from '../components/CTA'

export const Platform = () => {
  return (
    <div className="bg-white">
      <PlatformHero />
      <PlatformFeatures />
      <PlatformIntegrations />
      <PlatformCaseStudy />
      <PlatformTestimonial />
      <CTA />
    </div>
  )
}
