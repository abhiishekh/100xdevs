import React from 'react'
import './coursecard.css'
import completeDev from '../../assets/completedev.png'
import { Link } from 'react-router-dom'
const CourseCard = () => {
    return (
        <>
            <div className="coursecard">
                <div className="course-image">
                    <img src={completeDev} alt="" />
                </div>
                <div className="course-details">

                <div className="title">
                    <h3> Complete Web Development + Web3 Development</h3>
                </div>
                <div className="pricing">
                    <div className="price">

                    <p>₹5989</p>
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
