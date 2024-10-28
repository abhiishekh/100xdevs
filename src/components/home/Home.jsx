import React from 'react';
import './home.css';
import Nav from '../nav/Nav';
import Sidemenu from '../sidemenu/Sidemenu';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hero from '../hero/Hero';
import Courses from '../courses/Courses';
import NextModel from '../model/NextModel';
import CourseDetails from '../viewCourse/CourseDetails';
import MyCourses from '../mycourses/MyCourses';

const Home = () => {
  return (
    <BrowserRouter>
      <div className="home-container">
        <Nav />
        <div className="side-hero">
          <Sidemenu />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/courses" element={<Courses />} />
              <Route path='/coursedetails' element={<CourseDetails/>}/>
              <Route path='/mycourses' element={<MyCourses/>}/>
            </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
