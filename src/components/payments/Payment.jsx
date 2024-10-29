import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import solana from '../../assets/solana.png';
import upi from '../../assets/upi.png';
import Solana from './Solana';
import Upi from './Upi';
import './payment.css';

const Payment = ({ isOpen, onClose }) => {
    const [activeMethod, setActiveMethod] = useState('solana'); // Default active method

    if (!isOpen) return null;

    return (
        <div className='modal-overlay' >
            <div className='modal-content' style={{width:'300px',height:'350px'}}>
                <div className="modal-title">
                    <h2>Donate Here</h2>
                    <div className="close" onClick={onClose}>
                        <IoIosCloseCircle />
                    </div>
                </div>

                <div className="payment-methods">
                    <span 
                        onClick={() => setActiveMethod('solana')} 
                    >
                        Solana
                    </span>
                    <span 
                        onClick={() => setActiveMethod('upi')} 
                    >
                        UPI
                    </span>
                </div>

                <div className="payments">
                    {activeMethod === 'solana' && (
                        <div className="solana">
                            <Solana />
                        </div>
                    )}
                    {activeMethod === 'upi' && (
                        <div className="upi">
                            <Upi />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Payment;
