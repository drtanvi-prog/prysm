import { Results as ResultsComponent } from '../components/Results'
import { PlatformCaseStudy } from '../components/platform/PlatformCaseStudy'
import { CTA } from '../components/CTA'
import { useSEO } from '../utils/useSEO'

export const Results = () => {
  useSEO(
    'Results & Case Studies - Healthcare Philanthropy ROI',
    'See how major academic medical systems achieved first-year ROI, scaling physician referrals by 3,225% and qualifying millions in major gifts using Prysm.'
  )

  return (
    <div className="bg-white">
      <ResultsComponent />
      <PlatformCaseStudy />
      <CTA />
    </div>
  )
}
