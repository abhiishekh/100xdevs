import React, { useState } from 'react';
import './sidebar.css';
import { IoHomeSharp, IoSchool } from "react-icons/io5";
import { Link } from 'react-router-dom';
import NextModel from '../model/NextModel';
import Modal from '../model/Model';

const SideBar = ({ isOpen, onClose }) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModelOpen , setIsNextModelOpen] = useState(false)
  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };
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

  return (
    <div className={`sidebarr ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="sidebar-content" onClick={handleSidebarClick}>
        <h2>Main Menu</h2>
        <ul onClick={onClose}>
          
          <Link to='/' ><IoHomeSharp/>Home</Link>
          <Link to='/courses' ><IoSchool />Courses</Link>
        </ul>
        <div className="out">

        <button onClick={() => { onClose(); openModal(); }}>Signup</button>
        <button onClick={() => { onClose(); openNext(); }}>Sign in</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModelOpen} onClose={closeModal}/>
    </div>
  );
};

export default SideBar;
