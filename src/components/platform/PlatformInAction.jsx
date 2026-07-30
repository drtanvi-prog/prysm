export const PlatformInAction = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex gap-2 items-center mb-4">
            <span className="hairline"></span>
            <span className="eyebrow">Prysm in Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
            The full picture on every patient - on one screen.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            The right information in front of the right fundraiser at the right time - from the day's call list to the full patient record, personalized to the way they work.
          </p>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-2 rounded-xl shadow-xl border border-slate-200">
              <img 
                src="/image.png" 
                alt="Prysm Dashboard UI" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3 px-2">
              <span className="px-2 py-1 rounded bg-accent-soft text-accent-strong text-xs font-bold tracking-wider uppercase">Live in Prysm</span>
              <span className="text-sm text-slate-500 font-medium">The fundraising workspace - live, inside Salesforce.</span>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="w-full lg:w-2/5 space-y-6">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-accent/40 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-strong flex items-center justify-center text-white font-bold text-lg shadow-sm">
                01
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-1">Assigned Patients</h3>
                <p className="text-slate-500 text-sm leading-relaxed">A prioritized daily call list - the right patients, ranked.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-accent/40 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-lg shadow-sm">
                02
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-1">Patient Record</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Capacity range, model score, and full visit history on one screen.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-5 hover:border-accent/40 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-strong flex items-center justify-center text-white font-bold text-lg shadow-sm">
                03
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-1">Integrated Calling</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Place calls and log notes without leaving the workspace.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
