import React from 'react'
import HeroSection from '../components/Home/heroSection'
import TechCarousel from '../components/Home/techCarousel'
import CurrentWorking from '../components/Home/currentWorking'
import LatestProjects from '../components/Home/latestProjects'
export default function home() {
  return (
   <>
    <HeroSection />
    <TechCarousel />
    <LatestProjects />
    <CurrentWorking />
   </>
  )
}
