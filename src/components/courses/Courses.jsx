import React from 'react'
import './courses.css'
import CourseCard from '../coursecard/CourseCard'
import Footer from '../footer/Footer'
import { usefetch } from '../../Hooks/useFetch'

const Courses = () => {

  const {data, error,loading} = usefetch({url:`${import.meta.env.VITE_BACKEND_URL}/all-courses`})

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!Array.isArray(data) || data.length === 0) {
    return <div style={{margin:'0 auto'}}>No courses available yet.</div>;
  }
  return (
    <div className="hero-container">
        <div className="temp "style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <h1>Courses</h1>
          <div className="cards end">
          {
          data.map((items)=>(
            <CourseCard
            key={items._id}
            _id={items._id}
            title={items.title}
            description={items.description}
            price ={items.price}
            mrp={items.mrp}
            validity={items.validity}
            image={items.image}
            author={items.author}
            />
          ))
         }
          </div>
          <Footer/>

    </div>
    </div>
  )
}

export default Courses
