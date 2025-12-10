import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import TreatmentsSlider from '../components/Treatment.jsx'
import Testimonial from '../components/Testimonial.jsx'
import OurTeamSection from '../components/OurTeamSection.jsx'
import Footer from '../components/Footer.jsx'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <About/>
    <TreatmentsSlider/>
    <Testimonial/>
    <OurTeamSection/>
    <Footer />
    </>
  )
}

export default HomePage