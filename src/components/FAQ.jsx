import { useState } from 'react'

export const FAQ = () => {
  const faqs = [
    {
      question: "Is Prysm HIPAA compliant?",
      answer: "Yes. Prysm is built natively on Salesforce Health Cloud and inherits its rigorous security posture, including HIPAA, SOC 2, and HITRUST compliance. PHI never leaves your secure boundary."
    },
    {
      question: "How does Prysm integrate with our EMR?",
      answer: "Prysm uses native APIs and secure HL7/FHIR connections to sync encounter data from Epic, Cerner, and other major EMRs in real-time."
    },
    {
      question: "Will Prysm replace our existing Donor CRM?",
      answer: "No. Prysm acts as the operational bridge between your EMR and your Donor CRM (like Blackbaud). It qualifies the prospects and then pushes the structured data into your CRM for the major gifts team to take over."
    },
    {
      question: "How long does implementation take?",
      answer: "Because Prysm leverages your existing Salesforce infrastructure, typical deployments range from 8 to 12 weeks, depending on the complexity of your EMR data mapping."
    },
    {
      question: "Does Prysm require new vendor risk assessments?",
      answer: "Typically, no. If your organization already uses Salesforce, Prysm operates within that existing, approved security architecture, avoiding a lengthy new vendor risk review."
    }
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">Questions</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-3xl font-bold text-ink mb-4">Frequently asked questions</h2>
          <p className="text-slate-500">Everything you need to know about the product and implementation.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-ink">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}