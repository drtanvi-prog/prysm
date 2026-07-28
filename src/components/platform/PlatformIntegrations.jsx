export const PlatformIntegrations = () => {
  return (
    <section className="bg-white border-y border-slate-100">
      
      {/* Windfall (Image Left, Text Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex-1 bg-slate-100">
           <img src="/notebook.c11cb1fc.jpg" alt="Windfall Integration" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 tracking-wide flex items-center gap-2">
              <span className="text-blue-500 text-3xl font-black">W</span>
              WINDFALL
            </h3>
          </div>
          <p className="text-slate-500 font-light text-lg mb-12 leading-relaxed">
            Windfall is changing the way that organizations identify, understand, and engage the affluent. Through next generation API technology, Windfall’s data science and machine learning scientists are able to seamlessly collaborate with Prysm clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <div className="text-4xl font-light text-slate-700 mb-3">4x</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider w-40">Lead conversion of principal gift prospects.</div>
            </div>
            <div>
              <div className="text-4xl font-light text-slate-700 mb-3">9.6%</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider w-40">Increase in grateful patient identification.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Talkdesk (Text Left, Image Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 order-2 md:order-1">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-slate-800 flex items-center gap-1">
              talkd<span className="text-blue-500 font-bold">@</span>sk
            </h3>
          </div>
          <p className="text-slate-500 font-light text-lg leading-relaxed max-w-sm">
            Through an innovation partnership with TalkDesk, Prysm provides a seamless discovery visit scheduling process that drives transformational patient outreach.
          </p>
        </div>
        <div className="flex-1 bg-slate-100 order-1 md:order-2">
           <img src="/dash.ba9e397a.jpg" alt="Talkdesk Integration" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* WealthEngine (Image Left, Text Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex-1 bg-slate-100">
           <img src="/notebook_graph.372f1e8f.jpg" alt="WealthEngine Integration" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-green-500 italic flex flex-col leading-none">
              <span>We</span>
              <span className="text-[8px] uppercase font-sans text-green-600 not-italic tracking-widest mt-1">WealthEngine</span>
            </h3>
          </div>
          <p className="text-slate-500 font-light text-lg leading-relaxed max-w-sm">
            By combining WealthEngine’s proven wealth screening technology with real-time patient encounter analysis and integrated AI, Prysm transforms development’s ability to engage clinicians, nurses, and patients.
          </p>
        </div>
      </div>

      {/* Geopointe (Text Left, Image Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 order-2 md:order-1">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2z"/>
              </svg>
              geopointe
            </h3>
          </div>
          <p className="text-slate-500 font-light text-lg mb-6 leading-relaxed max-w-sm">
            Gain deep insight into your patient population with Geopointe.
          </p>
          <p className="text-slate-400 font-light mb-6 leading-relaxed max-w-sm">
            Redefine your grateful patient program strategy using the latest technology in visual mapping. Ultra segmentation of patients for:
          </p>
          <ul className="text-sm font-bold text-slate-800 space-y-2 list-disc pl-5">
            <li>Major Giving</li>
            <li>Direct Mail</li>
            <li>Digital Marketing</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="flex-1 bg-slate-100 order-1 md:order-2">
           <img src="/doppler.ffb31f4f.jpg" alt="Geopointe Integration" className="w-full h-full object-cover" />
        </div>
      </div>

    </section>
  )
}
