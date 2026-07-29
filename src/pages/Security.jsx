import { Security as SecurityComponent } from '../components/Security'
import { CTA } from '../components/CTA'
import { PageHeader } from '../components/PageHeader'

export const Security = () => {
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