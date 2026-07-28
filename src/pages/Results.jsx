import { Results as ResultsComponent } from '../components/Results'
import { PlatformCaseStudy } from '../components/platform/PlatformCaseStudy'
import { CTA } from '../components/CTA'

export const Results = () => {
  return (
    <div className="bg-white">
      <ResultsComponent />
      <PlatformCaseStudy />
      <CTA />
    </div>
  )
}
