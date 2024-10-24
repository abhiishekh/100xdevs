import React from 'react';
import './sidemenu.css';
import { IoHomeSharp, IoSchool } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidemenu = () => {
  return (
    <div className="side-container">
      <h1>Main Menu</h1>
      <div className="tags">
        <Link to="/"><IoHomeSharp /> Home</Link>
        <Link to="/courses"><IoSchool /> Courses</Link>
      </div>
    </div>
  );
};

export default Sidemenu;
