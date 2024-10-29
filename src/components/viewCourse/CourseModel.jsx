import React from 'react'
import './coursemodel.css'
import CourseCard from '../coursecard/CourseCard'
import BuyCard from '../buycard/BuyCard'

const CourseModel = (props) => {
  return (
    <div className="course-modal-overlay">
    <div className="course-modal-content ">
       
    <BuyCard
      id={props.id}
      title={props.title}
      price={props.price}
      mrp={props.mrp}
      image={props.image}
    />
    </div>
</div>
  )
}

export default CourseModel
