import React from 'react'
import './features.css'
import FeatureCard from '../featurecard/FeatureCard'
import featureImg from '../../assets/feature.png'

const Features = () => {
  return (
    <div className='featrure'>
        <h1 style={{fontSize:'50px',marginBottom:'40px'}}>Why 100xDevs?</h1>
        <div className="features">
            {/* <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/> */}
            <div className="features-img">
              <img src={featureImg} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Features
