import { Hero } from '../components/Hero'
import { TheOpportunity } from '../components/TheOpportunity'
import { TheChallenges } from '../components/TheChallenges'
import { HomeSolutions } from '../components/HomeSolutions'
import { CTA } from '../components/CTA'

export const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Social Proof Logos */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
            Proven in production across leading health systems
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
            {/* Using text placeholders since we don't have the actual client logo SVGs yet */}
            <div className="text-2xl font-bold font-serif text-slate-800">Providence</div>
            <div className="text-xl font-bold text-slate-800">City of Hope</div>
            <div className="text-2xl font-bold font-serif text-slate-800">LSU Health</div>
            <div className="text-xl font-bold text-slate-800">Rutgers Health</div>
          </div>
        </div>
      </section>

      <TheOpportunity />
      <TheChallenges />
      <HomeSolutions />
      <CTA />
    </>
  )
}
