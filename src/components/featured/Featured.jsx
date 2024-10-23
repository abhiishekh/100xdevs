import React from 'react'
import './featured.css'
import CourseCard from '../coursecard/CourseCard'
const Featured = () => {
  return (
    <>
     <div className="featured-container">
        <h1>Featured</h1>
        <div className="courses">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
     </div>
    </>
  )
}

export default Featured
