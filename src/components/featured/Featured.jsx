import React from 'react'
import './featured.css'
import CourseCard from '../coursecard/CourseCard'
import { usefetch } from '../../Hooks/useFetch'
const Featured = () => {

  const {data,error,loading} = usefetch({ url: 'http://localhost:3000/api/v1/featured-courses' })

  if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!Array.isArray(data) || data.length === 0) {
      return <div style={{margin:'0 auto'}}>No Featured courses available yet.</div>;
    }

  return (
    <>
     <div className="featured-container">
        <h1>Featured</h1>
        
        <div className="courses">
         {
          data.map((items)=>(
            <CourseCard
            key={items._id}
            image = {items.image}
            title={items.title}
            description={items.description}
            price ={items.price}
            />
          ))
         }
        </div>
     </div>
    </>
  )
}

export default Featured
