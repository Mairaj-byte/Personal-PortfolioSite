import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import AboutMe from '../components/AboutMe.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import Certifications from '../components/Certifications.jsx'
import Services from '../components/Services.jsx'
import TechStack from '../components/TechStack.jsx'
import { Contact } from 'lucide-react'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'

const LandingPage = () => {
  return (
    <>
       <Navbar />
       <HeroSection />
       <AboutMe />
       <Skills />
       <Projects />
       <Experience />
       <Education />
       <Certifications />
       <Services />
       <TechStack />
       <ContactSection />
       <Footer />
    </>
  )
}

export default LandingPage