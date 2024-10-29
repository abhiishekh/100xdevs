import React from 'react'
import './features.css'
import FeatureCard from '../featurecard/FeatureCard'
import featureImg from '../../assets/feature.png'

const Features = () => {
  return (
    <div className='featrure'>
        <h2 >Why 100xDevs?</h2>
        <div className="features">
            <div className="features-img">
              <img src={featureImg} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Features
