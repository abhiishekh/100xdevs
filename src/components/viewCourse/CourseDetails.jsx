import React from 'react'
import './coursedetails.css'
import Footer from '../footer/Footer'
import CourseModel from './CourseModel'

const CourseDetails = () => {
  return (
    <div className="hero-container scroll">

        <div className="details">
            <h1>Complete Web Development + Devops + Blockchain Cohort</h1>
        </div>
        <div className="upper">
        <h3>Overview</h3>
      <div className="line">
        <div className="thik"></div>
        <div className="narrow"></div>
      </div>
      <div className="content">
        <h3>Validity : 3 years</h3>
        <h3>Description</h3>
        <h3>Starts 2nd August 2024</h3>
        <p>Complete syllabus - https://blog.100xdevs.com/</p>
        <p>In the Web Development Cohort, we'll be diving deep into the MERN stack from the basics. The goal is for you to be able to understand any MERN codebase out there.</p>
        <p>We'll also be diving into Devops, both basic and advance</p>
        <h3>Web Development</h3>
      </div>

    </div>
    <div className="footer">

      <Footer/>
    </div>
      <CourseModel/>
    </div>
  )
}

export default CourseDetails
