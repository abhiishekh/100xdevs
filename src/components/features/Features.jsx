import React from 'react'
import './features.css'
import FeatureCard from '../featurecard/FeatureCard'

const Features = () => {
  return (
    <div className='featrure'>
        <h1>Why 100xDevs?</h1>
        <div className="features">
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>

        </div>
    </div>
  )
}

export default Features
