export const TheChallenges = () => {
  const challenges = [
    {
      title: "Siloed Systems",
      desc: "EMRs and CRMs don't talk to each other, creating massive blind spots between the clinical encounter and the development office."
    },
    {
      title: "Low Data Confidence",
      desc: "Fundraisers waste valuable hours manually verifying wealth screenings and patient data instead of building relationships."
    },
    {
      title: "Identification Lag",
      desc: "By the time a high-capacity prospect is finally identified, the clinical encounter is over and the window of gratitude has closed."
    },
    {
      title: "Staff Burnout",
      desc: "Manual list-building, fragmented spreadsheets, and clunky reporting exhaust the development team and limit program scalability."
    },
    {
      title: "Disconnected Clinicians",
      desc: "Physicians want to refer grateful patients, but have no easy, HIPAA-compliant way to do so within their daily workflow."
    }
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">The Problem</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6">
            Why the wealth transfer is being missed.
          </h2>
          <p className="text-lg text-slate-500">
            Despite the massive opportunity, hospital foundations are blocked by fundamental operational challenges that prevent them from scaling their grateful patient programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
              <div className="w-10 h-10 rounded-lg bg-indigo-900 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-3">{challenge.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">{challenge.desc}</p>
            </div>
          ))}
          
          <div className="bg-white p-8 rounded-2xl border-2 border-indigo-900 shadow-sm flex flex-col h-full justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-indigo-950 mb-2">The Cost of Inaction</h3>
            <p className="text-slate-500 text-sm">Every day these challenges persist is another missed opportunity to connect with a grateful patient.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
