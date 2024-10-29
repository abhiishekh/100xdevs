import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import CourseCard from '../coursecard/CourseCard'
import axios from 'axios'
import AccessCourse from '../accessCourse/AccessCourse'

const MyCourses = () => {

  const [data, setData] = useState([])

  const token = localStorage.getItem('token')

  const fetchData = async () => {
    try {
      
   
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/my-courses`, {
      headers: {
        token: token
      }
    })
    const result = response.data.arr || []
    setData(result)
  } catch (error) {
    console.log("error "+ error)
  }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="hero-container">
      <div className="temp " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h1>My Courses</h1>
        <div className="cards end">
          {data.map(course => (
            <AccessCourse
              key={course._id}
              image={course.image}
              title={course.title}
              author={course.author}
              _id={course._id}
            />
          ))}
        </div>
        <Footer />

      </div>
    </div>
  )
}

export default MyCourses
