import React, { useState } from 'react';
import './sidebar.css';
import { IoHomeSharp, IoSchool } from "react-icons/io5";
import { Link } from 'react-router-dom';
import NextModel from '../model/NextModel';
import { useCreator, useLoginCreator, useModel, useNextModel } from '../../Hooks/useModel';
import Modal from '../model/Modal';
import CreatorModel from '../model/CreatorModel';
import CreatorLogin from '../model/CreatorLogin';

const SideBar = ({ isOpen, onClose }) => {

  const {isModalOpen, openModal, closeModal} = useModel()
  const {isNextModel,openNextModel,closeNextModel} = useNextModel()
  const { isCreatorOpen, openCreator, closeCreator } = useCreator();
  const {isCreatorLogin, openCreatorLogin,closeCreatorLogin} = useLoginCreator()


  return (
    <div className={`sidebarr ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="sidebar-content" >
        <h2>Main Menu</h2>
        <ul onClick={onClose}>
          
          <Link to='/' ><IoHomeSharp/>Home</Link>
          <Link to='/courses' ><IoSchool />Courses</Link>
        </ul>
        <div className="out">
        <button onClick={()=> { onClose(); openCreator();}}>Become a Tutor</button>
        <button onClick={()=> {onClose(); openCreatorLogin();}}>Tutor Login</button>
        <button onClick={() => { onClose(); openModal(); }}>Signup</button>
        <button onClick={() => { onClose(); openNextModel(); }}>Sign in</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModel} onClose={closeNextModel}/>
      <CreatorModel isOpen={isCreatorOpen} onClose={closeCreator}/>
      <CreatorLogin isOpen={isCreatorLogin} onClose={closeCreatorLogin}/>
    </div>
  );
};

export default SideBar;
