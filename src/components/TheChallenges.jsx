export const TheChallenges = () => {
  const challenges = [
    {
      title: "Siloed Systems",
      desc: "EMRs and CRMs don't talk to each other, creating blind spots between the clinical encounter and the development office."
    },
    {
      title: "Low Data Confidence",
      desc: "Fundraisers spend valuable hours manually verifying wealth screenings and patient data instead of building relationships."
    },
    {
      title: "Identification Lag",
      desc: "By the time a high-capacity prospect is identified, the clinical encounter is over and the window of gratitude has closed."
    },
    {
      title: "Staff Burnout",
      desc: "Manual list-building, fragmented spreadsheets, and clunky reporting exhaust the development team and limit scalability."
    },
    {
      title: "Disconnected Clinicians",
      desc: "Physicians want to refer grateful patients, but have no easy, HIPAA-compliant way to do so within their daily workflow."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">The Problem</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
            Why the wealth transfer is being missed.
          </h2>
          <p className="text-lg text-slate-500">
            Despite the opportunity, hospital foundations are blocked by operational challenges that keep grateful patient programs from scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col h-full">
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-bold text-sm mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{challenge.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">{challenge.desc}</p>
            </div>
          ))}

          <div className="bg-ink p-8 rounded-2xl border border-ink-soft shadow-sm flex flex-col h-full justify-center items-center text-center">
            <h3 className="text-xl font-bold text-white mb-2">The Cost of Inaction</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Every day these challenges persist is another missed opportunity to connect with a grateful patient.</p>
          </div>
        </div>
      </div>
    </section>
  )
}