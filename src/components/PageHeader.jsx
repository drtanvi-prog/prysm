export const PageHeader = ({ label, title, subtitle }) => {
  return (
    <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline"></span>
            <span className="eyebrow">{label}</span>
            <span className="hairline"></span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
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