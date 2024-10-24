import React from 'react'
import './courses.css'
import CourseCard from '../coursecard/CourseCard'
import Footer from '../footer/Footer'

const Courses = () => {
  return (
    <div className="hero-container">
        <div className="temp ">
          <h1>Courses</h1>
          <div className="cards end">

      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
          </div>
          <Footer/>

    </div>
    </div>
  )
}

export default Courses
