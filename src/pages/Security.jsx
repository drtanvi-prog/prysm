import { Security as SecurityComponent } from '../components/Security'
import { CTA } from '../components/CTA'
import { PageHeader } from '../components/PageHeader'
import { useSEO } from '../utils/useSEO'

export const Security = () => {
  useSEO(
    'Enterprise Security & Compliance - HIPAA & SOC 2',
    'Prysm is HIPAA aligned, SOC 2 Type II certified, and Salesforce Native. Protect patient PHI within your approved institutional data boundary.'
  )

  return (
    <div className="bg-white">
      <PageHeader
        label="Enterprise Security"
        title="Built for hospital IT."
        subtitle="HIPAA compliant, SOC 2 Type II certified, and built natively on Salesforce Health Cloud."
      />

      {/* Main Content */}
      <div>
        <SecurityComponent />
        <CTA />
      </div>
    </div>
  )
}