import React from 'react'
import './hero.css'
import Crousel from '../crousel/Crousel'
import Featured from '../featured/Featured'
import Features from '../features/Features'
import About from '../about/About'
import Footer from '../footer/Footer'
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="temp">
         
          <Crousel />
          <Featured />
          <Features/>
          <About/>
          <Footer/>
        
        </div>
      </div>
    </>
  )
}

export default Hero
