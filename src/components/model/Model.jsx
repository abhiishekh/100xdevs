
import React, { useState } from 'react';
import './model.css';
import {Link} from 'react-router-dom'
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-title">
                    <div></div>
                    <h2>Enter email/phone number</h2>
                    <div className="close" onClick={onClose}>

                        <IoIosCloseCircle />
                    </div>

                </div>
                <form>
                    <label htmlFor="email">Phone number / Email I'D</label>
                    <input type="text" placeholder="Display Name" required />
                    <input type="text" placeholder="Enter your phone number or email id" required />
                    <input type="password" placeholder="Enter your password" required />
                    <div className="submit">

                       <button type="submit">Next</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Modal;
