import React, { useState } from 'react';
import './sidebar.css';
import { IoHomeSharp, IoSchool } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import NextModel from '../model/NextModel';
import { useModel, useNextModel } from '../../Hooks/useModel';
import Modal from '../model/Modal';
import { MdLogout } from "react-icons/md";
import { useAuth } from '../authcontext/AuthContext';


const SideBar = ({ isOpen, onClose }) => {

  const { isModalOpen, openModal, closeModal } = useModel()
  const { isNextModel, openNextModel, closeNextModel } = useNextModel()
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    setAuth(false)
    navigate('/')
  }

  return (
    <div className={`sidebarr ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="sidebar-content" >
        <h2>Main Menu</h2>
        <ul onClick={onClose}>

          <Link to='/' ><IoHomeSharp />Home</Link>
          <Link to='/courses' ><IoSchool />Courses</Link>
        </ul>
        {
          auth ? (
            <>
              <hr />
              <div className="tags">

                <Link to="/mycourses"><IoSchool /> My Courses</Link>
              </div>
            </>
          ) : (null)
        }

        {
          auth ? (
            <div className="out">
              <button onClick={handleLogout}><MdLogout /></button>
              {/* <div className="btns" onClick={handleLogout}><MdLogout /></div> */}
            </div>
          ) : (
            <div className="out">
              <button onClick={openModal}>Signup</button>
              <button onClick={openNextModel}>Login</button>
            </div>
          )
        }
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModel} onClose={closeNextModel} />
    </div>
  );
};

export default SideBar;
