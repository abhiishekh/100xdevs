import React, { useEffect, useState } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import NextModel from '../model/NextModel';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import SideBar from './SideBar';
import { useModel, useNextModel } from '../../Hooks/useModel';
import Modal from '../model/Modal';
import { useAuth } from '../authcontext/AuthContext';
import { MdLogout } from "react-icons/md";
import axios from 'axios';

const Nav = () => {
  const navigate = useNavigate();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModel();
  const { isNextModel, openNextModel, closeNextModel } = useNextModel();
  const { auth, setAuth } = useAuth();

  const [searchText, setSearchText] = useState('');
  const logoHandler = () => {
    navigate('/');
  };

  const sideHandler = () => {
    setIsSideOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSideOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate('/');
  };

  const handleUser = () => {
    navigate('/mycourses');
  };

  const handleChange = (e) => {
    setSearchText(e.target.value); // Update the search text
  };

 

const handleSub = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/search`, { title: searchText });

    if (response.data.response) {
      navigate('/search', { state: { results: response.data.response } });
    } else {
      console.log(response.data.message);
    }
  } catch (error) {
    console.error("Error searching for courses:", error);
  }
};

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <div className="sidebar" onClick={sideHandler}>
            <IoMenuOutline />
          </div>
          <img onClick={logoHandler} src={logo} alt="logo" />
        </div>
        <div className="user">
          <div className="search-icon"onClick={handleSub}>
            <IoSearch />
          </div>
          <div className="user-icon" onClick={handleUser}>
            <FaUserCircle />
          </div>
        </div>
        <div className="items">
          <form className="search" onClick={handleSub}>
            <input
              type="text"
              id='text'
              name='text'
              onChange={handleChange}
              value={searchText}
              placeholder='Type here to search..'
            />
            <div className="search-icon">
              <IoSearch />
            </div>
          </form>
          {
            auth ? (
              <div className="btns">
                <button onClick={handleLogout}><MdLogout /></button>
              </div>
            ) : (
              <div className="btns">
                <button onClick={openModal}>Signup</button>
                <button onClick={openNextModel}>Login</button>
              </div>
            )
          }
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <NextModel isOpen={isNextModel} onClose={closeNextModel} />
      <SideBar isOpen={isSideOpen} onClose={closeSidebar} />
    </>
  );
};

export default Nav;

