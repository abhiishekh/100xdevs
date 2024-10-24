import React from 'react'
import './coursemodel.css'
import CourseCard from '../coursecard/CourseCard'
import BuyCard from '../buycard/BuyCard'

const CourseModel = () => {
  return (
    <div className="course-modal-overlay">
    <div className="course-modal-content ">
       
    <BuyCard/>
    </div>
</div>
  )
}

export default CourseModel
