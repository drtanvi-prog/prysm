import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className="py-32 sm:py-40 flex items-center justify-center bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase bg-accent-soft px-3.5 py-1.5 rounded-md">
            Error 404
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-6 tracking-tight">
          Page not found
        </h1>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Verify the URL or return to our homepage.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-accent hover:bg-accent-strong transition-colors cursor-pointer shadow-sm"
        >
          Go back home
        </Link>
      </div>
    </section>
  )
}
