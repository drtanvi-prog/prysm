export const PageHeader = ({ label, title, subtitle }) => {
  return (
    <section className="pt-32 pb-20 bg-white border-b border-slate-100" style={{background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(219,234,254,0.35) 0%, rgba(255,255,255,0) 70%), #ffffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            {label}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-950 tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
