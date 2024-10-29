import React from 'react'

const AccessCourse = (props) => {
    
    const handleView=()=>{
        alert("no content yet")
    }
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

                <button onClick={handleView}>Explore Course</button>
                </div>
            </div>
        </>
    )
}

export default AccessCourse
