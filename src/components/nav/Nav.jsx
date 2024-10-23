import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="items">
          <div className="search">
            <input type="text" placeholder='type here to search..' />
            <div className="search-icon">
            <IoSearch />
            </div>
          </div>
          <div className="btns">
            <button>Signup</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
