import React, { useState } from 'react'
import axios from 'axios'
import './model.css'
import { IoIosCloseCircle } from "react-icons/io";

const CreatorLogin = ({isOpen,onClose}) => {
    if(!isOpen)return null


    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [Error,setError] = useState('')
    const [loading, setLoading] = useState(false);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:3000/api/v1/tutor-signin', {
                email: formData.email,
                password: formData.password
            });
            
            console.log(response);
            
            if (response.status === 200 && response.data.token) {
                console.log(response.data);
                const token = response.data.token;
                localStorage.setItem('token', token);
                onClose(); // Close the modal on successful login
            } else {
                console.log(response.data);
                setError(response.data.message || 'An unexpected error occurred');
            }
        } catch (error) {

            setError(error.response.data.message || 'An unexpected error occurred');
            
        }finally{
            setLoading(false)
        }
    };
    

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
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Phone number / Email I'D</label>
                    <input 
                    type="text" 
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your phone number or email id" 
                    required 
                    />
                    <input 
                    type="password" 
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password" 
                    required />
                     {Error && <div className="error">
                    <p style={{color:'red'}}>{Error}</p>
                    </div>}
                    <div className="submit">
                        <button type="submit" disabled={loading}>
                            {loading ? 'Signing in...' : 'Login'}
                        </button>
                    </div>
                </form>

            </div>
        </div>
  )
}
export default CreatorLogin
