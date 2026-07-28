export const Contact = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side - Info */}
        <div className="bg-indigo-950 p-10 sm:p-16 lg:p-24 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto w-full">
                <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-3">The Next Step</div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">See what's possible.</h1>
                <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
                  We would welcome the opportunity to join you in a conversation about your grateful patient program - and to explore whether Prysm could be the right fit for where you want to take it.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Program Review</h4>
                      <p className="text-indigo-200 text-sm">We get to know your grateful patient program and the goals behind it.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Opportunity View</h4>
                      <p className="text-indigo-200 text-sm">A clear read on where the most meaningful growth sits, grounded in your own data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Where Prysm Fits</h4>
                      <p className="text-indigo-200 text-sm">An honest take on whether Prysm is the right next step - or whether it isn't.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-indigo-800">
                  <p className="font-bold text-white mb-2">Start the conversation.</p>
                  <a href="mailto:sales@actionableinsightai.com" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sales@actionableinsightai.com
                  </a>
                </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="p-10 sm:p-16 lg:p-24 bg-white flex flex-col justify-center items-center">
          <div className="max-w-xl mx-auto w-full">
            <form className="space-y-6" action="/#/thankyou" method="POST" name="contact">
              <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" id="firstname" name="firstname" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-slate-700 bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" id="lastname" name="lastname" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-slate-700 bg-slate-50 focus:bg-white" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">Organization/Company</label>
                  <input type="text" id="organization" name="organization" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-slate-700 bg-slate-50 focus:bg-white" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-slate-700 bg-slate-50 focus:bg-white" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-slate-700 bg-slate-50 focus:bg-white" />
                </div>
                
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-slate-700 mb-2">Comments</label>
                  <textarea id="comments" name="comments" rows="4" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors text-slate-700 bg-slate-50 focus:bg-white resize-y"></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-sm cursor-pointer text-lg">
                    Submit
                  </button>
                </div>
              </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}
