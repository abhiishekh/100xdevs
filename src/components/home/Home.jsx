import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import Sidemenu from '../sidemenu/Sidemenu'
import Hero from '../hero/Hero'


const Home = () => {
  return (
    <>
    <div className="home-container">
    <Nav/>
    <div className="side-hero">
        <Sidemenu/>
        <Hero/>
    </div>

    </div>
    </>
  )
}

export default Home
