import { useState } from 'react';
import prysmIconLight from '../../assets/icons/prysm-icon-light.svg';

export const PlatformHero = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "Step 1",
      title: "Generate patient list",
      description: "Single click reporting and automated encounter analysis provides fundraisers with real time access to patients with greatest affinity and capacity.",
      image: "/illustrations/step-1.829c359c.svg"
    },
    {
      step: "Step 2",
      title: "Review with clinicians",
      description: "When clinicians are engaged in a process with analytically sound information and consistent follow up reporting, they are highly willing to partner with development.",
      image: "/illustrations/step-2.88960699.svg"
    },
    {
      step: "Step 3",
      title: "Contact patients",
      description: "Intuitive in-platform phone call and email tracking enables fundraisers to efficiently record discovery activity.",
      image: "/illustrations/step-3.57f5e397.svg"
    },
    {
      step: "Step 4",
      title: "Report outcomes",
      description: "Intuitive single click reporting enables fundraisers to view clinicians’ patients using a scoring model that combines affinity and capacity.",
      image: "/illustrations/step-4_1.b7da9f35.svg"
    },
    {
      step: "Step 5",
      title: "Optimize strategy",
      description: "Easily track and record outcomes of discovery activity to optimize program strategy.",
      image: "/illustrations/step-5.ac1ea224.svg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Top Banner Image Section */}
      <section 
        className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/images/BannerPrysm.ee7737cf.jpg')" }}
      >
        {/* Diagonal overlays based on screenshot (optional, but image might already have them) */}
        {/* Assuming the BannerPrysm image already has the green/blue overlays and people in it based on the screenshot */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex items-center mb-4">
            <img src={prysmIconLight} alt="Prysm Logo" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white">
            How it works
          </h1>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 leading-tight mb-6">
          Prysm provides an enterprise wide process supported by technology to drive clinician engagement and grateful patient identification at scale.
        </h2>
        <p className="text-lg text-slate-500 font-light">
          Drive major gift identification with five intuitive, repeatable steps to support sustainable clinician engagement.
        </p>
      </section>

      {/* Interactive Tabs Section */}
      <section className="max-w-6xl mx-auto px-4 pb-32">
        {/* Tabs Header */}
        <div className="flex overflow-x-auto lg:flex-wrap pb-4 lg:pb-0 gap-6 lg:gap-0 lg:justify-between border-b border-slate-200 mb-16 scrollbar-none">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`pb-4 flex-shrink-0 lg:flex-1 text-left px-2 border-b-2 transition-colors cursor-pointer min-w-[140px] ${
                activeStep === index 
                  ? 'border-accent text-slate-900' 
                  : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-1">{step.step}</div>
              <div className="text-sm font-semibold">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
          <div className="animate-fade-in-up">
            <p className="text-2xl md:text-3xl text-slate-700 font-light leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-up">
            <img 
              src={steps[activeStep].image} 
              alt={steps[activeStep].title}
              className="max-w-full h-auto object-contain drop-shadow-2xl rounded-xl"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
