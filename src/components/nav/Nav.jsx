import React, { useState } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import Modal from '../model/Model'
import NextModel from '../model/NextModel';


const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModelOpen , setIsNextModelOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };
  const opneNext =()=>{
    setIsNextModelOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false);
    setIsNextModelOpen(false)
  };

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
            <button onClick={openModal}>Signup</button>
            <button onClick={opneNext}>Login</button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModelOpen} onClose={closeModal}/>
    </>
  );
};

export default Nav;
