export const About = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-indigo-950 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-indigo-950 to-indigo-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Your success is <span className="text-blue-500">our success.</span>
            </h1>
            <p className="text-xl text-indigo-200 leading-relaxed max-w-2xl">
              Our mission is to advance global healthcare one client at a time. Efficiency without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">Our Story</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-10">
            The Next Generation of Grateful Patient Program Development
          </h2>
          
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-8">
            <p className="leading-relaxed">
              For a long time, the philanthropic capacity of the healthcare industry has operated at a noticeable 
              deficit relative to comparable domestic nonprofit institutions-a reality that directly affects 
              our nation's broader ability to cure disease and advance global healthcare.
            </p>
            <p className="leading-relaxed">
              We started Actionable Insight to build a better way for health systems to realize their true 
              philanthropic potential. What initially began as a boutique advisory firm for healthcare 
              executives eventually resulted in the development of our flagship technology product, Prysm.
            </p>
            <p className="leading-relaxed">
              Prysm is fundamentally shifting the landscape of healthcare philanthropy by closing the technology 
              gap between health systems and higher education, providing healthcare development professionals 
              with the resources they need to thrive. 
            </p>
            <p className="leading-relaxed font-medium text-slate-800">
              Most importantly, it ensures that your community can continue receiving the highest quality medical care available.
            </p>
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 mb-6">
            Discover how Prysm can work for you.
          </h2>
          <a href="mailto:sales@actionableinsightai.com" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer">
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  )
}
