import React, { useEffect, useState } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import NextModel from '../model/NextModel';
import { useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import SideBar from './SideBar';
import {useModel, useNextModel} from '../../Hooks/useModel'
import Modal from '../model/Modal';
import CreatorModel from '../model/CreatorModel';
import { useAuth } from '../authcontext/AuthContext';
import { MdLogout } from "react-icons/md";


const Nav = () => {

  const navigate = useNavigate()
  const [isSideOpen, setIsSideOpen] = useState(false)
  const {isModalOpen, openModal, closeModal} = useModel()
  const {isNextModel,openNextModel,closeNextModel} = useNextModel()
 const {auth,setAuth} = useAuth()

  const logoHandler =()=>{
    navigate('/')
  }
  const sideHandler =()=>{
    setIsSideOpen(prev => !prev)
  }

  const closeSidebar = () => {
    setIsSideOpen(false);
  };
  const handleLogout=()=>{
    localStorage.removeItem("token")
    setAuth(false)
    navigate('/')
  }

  return (
    <>
      <div className="nav-container">
        <div className="logo" >
          <div className="sidebar" onClick={sideHandler}>
          <IoMenuOutline />
          
         
          </div>
          <img onClick={logoHandler} src={logo} alt="logo" />
        </div>
        <div className="user">
        <div className="search-icon">
              <IoSearch />
            </div>
            <div className="user-icon">

            <FaUserCircle />
            </div>

        </div>
        <div className="items">
          <div className="search">
            <input type="text" placeholder='type here to search..' />
            <div className="search-icon">
              <IoSearch />
            </div>
          </div>
          {
            auth ? (
              <div className="btns">
           <button onClick={handleLogout}><MdLogout /></button>
          </div>
            ):(
              <div className="btns">
            <button onClick={openModal}>Signup</button>
            <button onClick={openNextModel}>Login</button>
          </div>
            )
          }
          
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModel} onClose={closeNextModel}/>
      <SideBar isOpen={isSideOpen} onClose={closeSidebar} />
    </>
  );
};


export default Nav;
