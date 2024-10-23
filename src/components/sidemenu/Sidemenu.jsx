import React from 'react'
import './sidemenu.css'
import { IoHomeSharp,IoSchool } from "react-icons/io5";

const Sidemenu = () => {
  return (
    <>
      <div className="side-container">
        <h1>main menu</h1>
        <div className="tags">
          <a href="#"><IoHomeSharp />Home</a>
         <a href="#"><IoSchool />Courses</a>
        </div>
      </div>
    </>
  )
}

export default Sidemenu
