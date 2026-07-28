import { Hero } from '../components/Hero'
import { TheOpportunity } from '../components/TheOpportunity'
import { HowItWorks } from '../components/HowItWorks'
import { Features } from '../components/Features'
import { Results } from '../components/Results'
import { Security } from '../components/Security'
import { CTA } from '../components/CTA'

export const Home = () => {
  return (
    <>
      <Hero />
      <TheOpportunity />
      <HowItWorks />
      <Features />
      <Results />
      <Security />
      <CTA />
    </>
  )
}
