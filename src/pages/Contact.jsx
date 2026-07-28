export const Contact = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Left Side - Info */}
            <div className="bg-indigo-950 p-10 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden lg:col-span-2">
              <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
                  We'd welcome the opportunity to discuss your grateful patient program and explore how Prysm can help you close the loop between clinical encounters and major gifts.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-indigo-100 font-medium">sales@actionableinsightai.com</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            </div>
            
            {/* Right Side - Form */}
            <div className="p-10 sm:p-12 lg:col-span-3">
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
    </div>
  )
}
