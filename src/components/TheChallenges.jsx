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
    <section className="py-24 sm:py-32 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow">The Problem</span>
            <span className="hairline"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
            Why the wealth transfer is being missed.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Despite the opportunity, hospital foundations are blocked by operational challenges that keep grateful patient programs from scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-slate-50/50 p-8 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-accent/30 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-accent font-bold text-sm mb-6 flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-accent transition-colors duration-200">{challenge.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">{challenge.desc}</p>
            </div>
          ))}

          <div className="bg-gradient-to-br from-ink to-ink-dim p-8 rounded-xl border border-ink-soft shadow-lg flex flex-col h-full justify-center items-center text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-accent/10 blur-lg group-hover:bg-accent/20 transition-all duration-300"></div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">The Cost of Inaction</h3>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10">Every day these challenges persist is another missed opportunity to connect with a grateful patient.</p>
          </div>
        </div>
      </div>
    </section>
  )
}