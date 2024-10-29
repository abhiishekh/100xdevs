import React, { useEffect, useState } from 'react';
import './model.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

import { useAuth } from '../authcontext/AuthContext'
import { useNavigate } from 'react-router-dom';
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {auth,setAuth} = useAuth()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,formData)

            if(response.status === 200 && response.data.token){
                const token = response.data.token
                localStorage.setItem("token",token)
                setAuth(true)
                onClose()
                navigate('/')
            }else {
                setError(response.data.message); 
            }
         
        } catch (error) {
            console.log("error aa gya bhai " + error)
            setError(error.response?.data?.message || 'An unexpected error occurred'); 
        }finally{
            setLoading(false)
        }

       
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-title">
                    <h2>Enter your details</h2>
                    <div className="close" onClick={onClose}>
                        <IoIosCloseCircle />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Display Name</label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Display Name"
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    {error && <div className="error">
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>}
                    <div className="submit">
                        <button type="submit" disabled={loading}>
                            {loading ? 'Signing up...' : 'Signup'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
