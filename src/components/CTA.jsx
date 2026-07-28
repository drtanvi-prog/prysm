export const CTA = () => {
  return (
    <section className="py-32 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">The Next Step</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-950">See what's possible.</h2>
          <p className="text-xl text-slate-500">
            We would welcome the opportunity to join you in a conversation about your grateful patient program - and to explore whether Prysm could be the right fit for where you want to take it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8 border-b border-slate-100 pb-4">Step 1</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-950">Program Review</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">We get to know your grateful patient program and the goals behind it.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8 border-b border-slate-100 pb-4">Step 2</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-950">Opportunity View</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">A clear read on where the most meaningful growth sits, grounded in your own data.</p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl border-2 border-indigo-900 shadow-sm flex flex-col h-full relative">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-8 border-b border-slate-100 pb-4">Step 3</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-950">Where Prysm Fits</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">An honest take on whether Prysm is the right next step - or whether it isn’t.</p>
          </div>
        </div>

        <div className="bg-indigo-950 rounded-2xl p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between shadow-xl text-center sm:text-left">
          <h3 className="text-3xl font-bold text-white mb-6 sm:mb-0">Start the conversation.</h3>
          <div className="text-right">
            <a href="mailto:sales@actionableinsightai.com" className="block text-xl font-medium text-white hover:text-blue-200 transition-colors">
              sales@actionableinsightai.com
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
