import React, { useEffect, useState } from 'react'
import './buycard.css'
import completeDev from '../../assets/completedev.png'
import axios from 'axios'
import { useModel } from '../../Hooks/useModel'
import Payment from '../payments/Payment'

const BuyCard = (props) => {

    const {isModalOpen, openModal, closeModal} = useModel()
    const token = localStorage.getItem("token")
    const id = props.id
    const fetchData= async()=>{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/purchase/${id}`,{},
            {
                headers:{
                    token : token
                }
            }
        )
        console.log(response)
        alert(response.data.message)
    }

    const discount = props.mrp ? ((props.mrp - props.price) / props.mrp) * 100 : 0; 
    const discountFormatted = discount ? discount.toFixed(2) : 0; 

    return (
        <div className='buy-card'>
          <div className="course-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="course-details">
                <p style={{marginTop:'20px', color:'gray'}}>PRICE</p>
                <div className="pricing">
                    <div className="price">

                    <p>₹{props.price}</p>
                    <p className='mrp'>{props.mrp}</p>
                    </div>
                    <p className='green'>{discountFormatted}% off</p>
                </div>
              <button style={{marginBottom:'10px'}} onClick={fetchData}>Dummy Buy Now</button>
              <button onClick={openModal}>Donate Bounty</button>
                
                </div>
            <Payment isOpen={isModalOpen} onClose={closeModal}/>

        </div>
    )
}

export default BuyCard
