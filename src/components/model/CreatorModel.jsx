import React, { useState } from 'react';
import './model.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';


const CreatorModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        subject:'',
        experience:'',
        qualification:'',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3000/api/v1/tutor', {
                username: formData.username,
                email: formData.email,
                subject:formData.subject,
                experience: Number(formData.experience),
                qualification:formData.qualification,
                password: formData.password,

            });

            if (response.status === 200 && response.data.token) {
                console.log("ok")
                const token = response.data.token;
                localStorage.setItem('token', token);
                onClose(); 
            } else {
                setError(response.data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred while signing up. Please try again.');
        } finally {
            setLoading(false);
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
                   <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter your subject"
                        required
                    />
                    <label htmlFor="experience">Experience</label>
                    <input
                        type="number"
                        id='experience'
                        name='experience'
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Enter your experience"
                        required
                    />
                     <label htmlFor="qualification">Qualification</label>
                    <input
                        type="text"
                        id='qualification'
                        name='qualification'
                        value={formData.qualification}
                        onChange={handleChange}
                        placeholder="Enter your qualification"
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

export default CreatorModel
