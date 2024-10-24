import React, { useState } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import Modal from '../model/Model'
import NextModel from '../model/NextModel';
import { useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Sidemenu from '../sidemenu/Sidemenu';
import SideBar from './SideBar';


const Nav = () => {
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModelOpen , setIsNextModelOpen] = useState(false)
  const [isSideOpen, setIsSideOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };
  const openNext =()=>{
    setIsNextModelOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false);
    setIsNextModelOpen(false)
  };
  const logoHandler =()=>{
    navigate('/')
  }
  const sideHandler =()=>{
    setIsSideOpen(prev => !prev)
    // console.log(isSideOpen)
  }

  const closeSidebar = () => {
    setIsSideOpen(false);
  };

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
          <div className="btns">
            <button onClick={openModal}>Signup</button>
            <button onClick={openNext}>Login</button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModelOpen} onClose={closeModal}/>
      <SideBar isOpen={isSideOpen} onClose={closeSidebar} />
    </>
  );
};


export default Nav;
