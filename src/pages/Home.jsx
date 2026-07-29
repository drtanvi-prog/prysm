import { Hero } from '../components/Hero'
import { TheOpportunity } from '../components/TheOpportunity'
import { TheChallenges } from '../components/TheChallenges'
import { HomeSolutions } from '../components/HomeSolutions'
import { HowItWorks } from '../components/HowItWorks'
import { FAQ } from '../components/FAQ'
import { CTA } from '../components/CTA'
import { useSEO } from '../utils/useSEO'

export const Home = () => {
  useSEO(
    'Prysm - Grateful Patient Philanthropy Platform',
    'Prysm connects clinicians, patients, and fundraisers on a single platform - turning clinical encounters into qualified major gifts without manual work.'
  )

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