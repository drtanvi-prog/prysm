export const CTA = () => {
  return (
    <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12">
          <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-3">The Next Step</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">See what's possible.</h2>
          <p className="text-xl text-indigo-200 max-w-2xl">
            We would welcome the opportunity to join you in a conversation about your grateful patient program - and to explore whether Prysm could be the right fit for where you want to take it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-indigo-900/50 p-8 rounded-2xl border border-indigo-800">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold mb-6 shadow-md">1</div>
            <h3 className="text-xl font-bold mb-3 text-white">Program Review</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">We get to know your grateful patient program and the goals behind it.</p>
          </div>
          
          <div className="bg-indigo-900/50 p-8 rounded-2xl border border-indigo-800">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold mb-6 shadow-md">2</div>
            <h3 className="text-xl font-bold mb-3 text-white">Opportunity View</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">A clear read on where the most meaningful growth sits, grounded in your own data.</p>
          </div>
          
          <div className="bg-indigo-900/50 p-8 rounded-2xl border border-indigo-800">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold mb-6 shadow-md">3</div>
            <h3 className="text-xl font-bold mb-3 text-white">Where Prysm Fits</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">An honest take on whether Prysm is the right next step - or whether it isn’t.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-0">Start the conversation.</h3>
          <div className="text-right">
            <a href="mailto:sales@actionableinsightai.com" className="block text-lg font-medium text-white hover:text-blue-200 transition-colors">
              sales@actionableinsightai.com
            </a>
            <a href="https://actionableinsightai.com" className="block text-sm text-indigo-200 hover:text-white transition-colors mt-1">
              actionableinsightai.com
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
