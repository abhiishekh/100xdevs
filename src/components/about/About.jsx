import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className='about'>
            <h1>About 100xDevs</h1>
            <div className="about-card">
                <p>Welcom to 100xdevs.</p>
                <p>This is an initiative by <span>Harkirat Singh</span> to personally mentor folks in the field of Programming.</p>
                <p>Harkirat strongly feels that you are either a 1x engineer or a 100x engineer and nothing in the middle, and his hope is to take everyone in this community to be a
                 <span> 100x Engineer.</span></p>
                <p>Join him in his first course on Full Stack development with heavy focus on Open source projects to learn programming practically.</p>
            </div>
        </div>
    )
}

export default About
