import React, { useState } from 'react';
import axios from 'axios';
import './model.css';
import { IoIosCloseCircle } from 'react-icons/io';
import { useAuth } from '../authcontext/AuthContext';
import { useNavigate } from 'react-router-dom';

const NextModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { setAuth } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Reset error on new submit

        try {
            const response = await axios.post('http://localhost:3000/api/v1/signin', formData);
            if (response.status === 200 && response.data.token) {
                const token = response.data.token; // Get the token from the response
                localStorage.setItem("token", token); // Store the token
                setAuth(true); // Update auth context
                onClose()
                navigate('/'); // Redirect to home

            }
        } catch (error) {
            console.error("Error occurred:", error); // Log the error for debugging
            setError(error.response?.data?.message || 'An error occurred'); // Safely access the error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-title">
                    <h2>Enter email/phone number</h2>
                    <div className="close" onClick={onClose}>
                        <IoIosCloseCircle />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Phone number / Email ID</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your phone number or email id"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    {error && (
                        <div className="error">
                            <p style={{ color: 'red' }}>{error}</p>
                        </div>
                    )}
                    <div className="submit">
                        <button type="submit" disabled={loading}>
                            {loading ? 'Signing in...' : 'Signin'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NextModel;
