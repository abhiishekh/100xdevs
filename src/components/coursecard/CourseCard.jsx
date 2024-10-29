import React, { useState } from 'react'
import './coursecard.css'
import completeDev from '../../assets/completedev.png'
import { Link, useNavigate } from 'react-router-dom'
const CourseCard = (props) => {


    const navigate = useNavigate()
    const id = props._id
    const handleView=()=>{
        navigate('/coursedetails',{state:{id:id}})
    }

    const discount = props.mrp ? ((props.mrp - props.price) / props.mrp) * 100 : 0; 
    const discountFormatted = discount ? discount.toFixed(2) : 0; 
  
    return (
        <>
            <div className="coursecard">
                <div className="course-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="course-details">

                <div className="title">
                    <h3> {props.title}</h3>
                    <p>{props.author}</p>
                </div>
                <div className="pricing">
                    <div className="price">

                    <p>₹{props.price}</p>
                    <p className='mrp'>{props.mrp}</p>
                    </div>
                    <p className='green'>{discountFormatted}% off</p>
                </div>
                <button onClick={handleView}>View Details</button>
                </div>
            </div>
        </>
    )
}

export default CourseCard
