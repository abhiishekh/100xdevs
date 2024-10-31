import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import CourseCard from '../coursecard/CourseCard'
import axios from 'axios'
import AccessCourse from '../accessCourse/AccessCourse'
import { usefetch } from '../../Hooks/useFetch'
import { useAuth } from '../authcontext/AuthContext'

const MyCourses = () => {

  const {auth} = useAuth()

  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')

  const fetchData = async () => {
    try {
      setLoading(true)

      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/my-courses`, {
        headers: {
          token: token
        }
      })
     
      const result = response.data.arr || []
      setData(result)
    } catch (error) {
      console.log("error " + error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <div style={{ margin: '0 auto' }}>Loading...</div>;
  if (error) return <div style={{ margin: '0 auto' }}>Error: {error}</div>;

  if(!auth){
    return <div style={{margin:'0 auto'}}> Login first</div>
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div style={{ margin: '0 auto' }}>No courses purchased yet.</div>;
  }

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
