import { Hero } from '../components/Hero'
import { TheOpportunity } from '../components/TheOpportunity'
import { TheChallenges } from '../components/TheChallenges'
import { HomeSolutions } from '../components/HomeSolutions'
import { HowItWorks } from '../components/HowItWorks'
import { FAQ } from '../components/FAQ'
import { CTA } from '../components/CTA'

export const Home = () => {
  return (
    <>
      <Hero />
      <TheOpportunity />
      <TheChallenges />
      <HomeSolutions />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  )
}
