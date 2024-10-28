import React from 'react';
import './sidemenu.css';
import { IoHomeSharp, IoSchool } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CreatorModel from '../model/CreatorModel';
import CreatorLogin from '../model/CreatorLogin';
import { useCreator, useLoginCreator } from '../../Hooks/useModel';
import { useAuth } from '../authcontext/AuthContext';

const Sidemenu = () => {
  
  const { isCreatorOpen, openCreator, closeCreator } = useCreator();
  const {isCreatorLogin, openCreatorLogin,closeCreatorLogin} = useLoginCreator()
  const {auth} = useAuth()
  return (
    <div className="side-container">
      <h1>Main Menu</h1>
      <div className="tags">
        <Link to="/"><IoHomeSharp /> Home</Link>
        <Link to="/courses"><IoSchool /> Courses</Link>
      </div>
      {
        auth ? (
          <>
          <hr /> 
          <div className="tags">

          <Link to="/mycourses"><IoSchool /> My Courses</Link>
          </div>
          </>

        ):(
          null
        )
      }
      {/* <div className="login">
      <button onClick={openCreator}>Become a Tutor</button>
      <button onClick={openCreatorLogin}>Tutor Login</button>
      </div> */}
      <CreatorModel isOpen={isCreatorOpen} onClose={closeCreator}/>
      <CreatorLogin isOpen={isCreatorLogin} onClose={closeCreatorLogin}/>
    </div>
  );
};

export default Sidemenu;
