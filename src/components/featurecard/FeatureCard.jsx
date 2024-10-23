import React from 'react'
import './featurecard.css'
import { FaBookReader } from "react-icons/fa";
import logo from '../../assets/student.png'


const FeatureCard = () => {
  return (
    <div className='featurecard'>
        <div className="title-logo">
            <div className="title">

      <h3>Learn from the best</h3>
      <div className="line"></div>
            </div>
            <img src={logo} alt="logo" />
            {/* <div className="icon">

            <FaBookReader />
            </div> */}

        </div>
        <p>Harkirat is the best in india when it comes to learning about remote work and open source</p>
    </div>
  )
}

export default FeatureCard
