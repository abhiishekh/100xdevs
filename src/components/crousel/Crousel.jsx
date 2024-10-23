import React, { useRef } from 'react'
import './crousel.css'
import crouselImg1 from '../../assets/blockChainHero.png'
import crouselImg2 from '../../assets/completeHero.png'
import crouselImg3 from '../../assets/webHero.png'

const Crousel = () => {

  return (
    <>
      <div className="crousel-container">
        <div className="crousel-inner">

        <img src={crouselImg1} alt="" />
        <img src={crouselImg2} alt="" />
        <img src={crouselImg3} alt="" />
        </div>

       
      </div>
    </>
  )
}

export default Crousel
