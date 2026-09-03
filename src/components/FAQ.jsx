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

  const colors = [
    { border: 'border-l-[#0070F3]', icon: 'text-[#0070F3]' }, // Electric Blue
    { border: 'border-l-[#00DF89]', icon: 'text-[#00DF89]' }, // Modern Mint
    { border: 'border-l-[#FFB224]', icon: 'text-[#FFB224]' }, // Warm Gold
    { border: 'border-l-[#7928CA]', icon: 'text-[#7928CA]' }, // Deep Purple
    { border: 'border-l-[#FF0080]', icon: 'text-[#FF0080]' }  // Magenta Pink
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">Questions</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">Frequently asked questions</h2>
          <p className="text-sm sm:text-base text-slate-500">Everything you need to know about the product and implementation.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const color = colors[index % colors.length]
            const isActive = openIndex === index
            
            return (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 border-y border-r border-slate-200 border-l-4 ${color.border} hover:shadow-md`}
              >
                <button
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                  onClick={() => setOpenIndex(isActive ? -1 : index)}
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isActive ? 'text-ink' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <span className="ml-4 sm:ml-6 flex-shrink-0">
                    {isActive ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors">
                        <svg className={`h-4 w-4 ${color.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 flex items-center justify-center transition-colors">
                        <svg className={`h-4 w-4 ${color.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    )}
                  </span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? 'max-h-64 sm:max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}