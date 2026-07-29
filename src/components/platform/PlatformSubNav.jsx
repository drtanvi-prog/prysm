import { useState, useEffect } from 'react'

const sections = [
  { id: 'how-it-works', label: 'How it Works' },
  { id: 'features', label: 'Features' },
  { id: 'in-action', label: 'In Action' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'clinicians', label: 'Clinicians' },
  { id: 'integrations', label: 'Integrations' },
]

export const PlatformSubNav = () => {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto scrollbar-none py-3">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                active === id
                  ? 'bg-accent-soft text-ink'
                  : 'text-slate-500 hover:text-ink hover:bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
