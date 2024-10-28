import React from 'react'
import './coursecard.css'
import completeDev from '../../assets/completedev.png'
import { Link } from 'react-router-dom'
const CourseCard = (props) => {
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
                    <p className='mrp'>8499</p>
                    </div>
                    <p className='green'>29.53% off</p>
                </div>
               <Link to='/coursedetails'><button>View Details</button></Link>
                
                </div>
            </div>
        </>
    )
}

export default CourseCard
