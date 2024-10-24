import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import playstore from '../../assets/playstore.png'
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer '>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="quick-links">
        <h3>Quick Links</h3>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Refunds & Cancellation Policy</a>
      </div>
      <div className="rest">
        <h3>Download App</h3>
        <div className="playstore">

        <img src={playstore} alt="play store img" />
        </div>
        <h3>Follow us</h3>
        <div className="social-links">
        <FaXTwitter />
        <FaLocationDot />
        <FaYoutube />
        <BsLinkedin />
        </div>
        Powerd by Abhishek Maurya
      </div>
    </div>
  )
}

export default Footer
