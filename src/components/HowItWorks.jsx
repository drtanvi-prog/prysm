import { useState } from 'react'

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      step: "Step 1",
      title: "Identify grateful patients",
      description: "Single click reporting and automated encounter analysis provides fundraisers with real time access to patients with greatest affinity and capacity.",
      image: "/step-1.829c359c.svg"
    },
    {
      step: "Step 2",
      title: "Engage clinicians",
      description: "When clinicians are engaged in a process with analytically sound information and consistent follow up reporting, they are highly willing to partner with development.",
      image: "/step-2.88960699.svg"
    },
    {
      step: "Step 3",
      title: "Qualify prospects",
      description: "Intuitive in-platform phone call and email tracking enables fundraisers to efficiently record discovery activity.",
      image: "/step-3.57f5e397.svg"
    },
    {
      step: "Step 4",
      title: "Hand off to your CRM",
      description: "Intuitive single click reporting enables fundraisers to view clinicians’ patients using a scoring model that combines affinity and capacity.",
      image: "/step-4_1.b7da9f35.svg"
    },
    {
      step: "Step 5",
      title: "Report impact back",
      description: "Easily track and record outcomes of discovery activity to optimize program strategy.",
      image: "/step-5.ac1ea224.svg"
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">How it works</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">Prysm closes the loop every other system leaves open.</h2>
          <p className="text-slate-500 text-lg">
            A repeatable engine for grateful patient philanthropy - where reporting impact back to clinicians is what earns the next referral.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="mb-24">
          {/* Tabs Header */}
          <div className="flex overflow-x-auto lg:flex-wrap pb-4 lg:pb-0 gap-6 lg:gap-0 lg:justify-between border-b border-slate-200 mb-12 scrollbar-none">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`pb-4 flex-shrink-0 lg:flex-1 text-left px-2 border-b-2 transition-colors cursor-pointer min-w-[140px] ${
                  activeStep === index 
                    ? 'border-accent text-slate-900 font-semibold' 
                    : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-1">{step.step}</div>
                <div className="text-sm">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[360px] py-8">
            <div>
              <h3 className="text-2xl font-bold text-ink mb-4">{steps[activeStep].title}</h3>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title}
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </div>
        </div>

        {/* Comparison Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold text-ink mb-3">AI tools</h4>
            <p className="text-slate-500 text-sm leading-relaxed">surface prospects - but can't manage the clinician partnership.</p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold text-ink mb-3">Donor CRMs</h4>
            <p className="text-slate-500 text-sm leading-relaxed">hold the data - but never report results back.</p>
          </div>
          <div className="bg-ink px-6 py-10 sm:p-10 rounded-2xl shadow-sm flex items-center justify-center sm:justify-start">
            <h4 className="text-2xl font-bold text-white">Only Prysm does both.</h4>
          </div>
        </div>

      </div>
    </section>
  )
}