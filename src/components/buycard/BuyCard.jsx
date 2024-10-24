import React from 'react'
import './buycard.css'
import completeDev from '../../assets/completedev.png'

const BuyCard = () => {
    return (
        <div className='buy-card'>
          <div className="course-image">
                    <img src={completeDev} alt="" />
                </div>
                <div className="course-details">
                <p style={{marginTop:'20px', color:'gray'}}>PRICE</p>
                <div className="pricing">
                    <div className="price">

                    <p>₹5989</p>
                    <p className='mrp'>8499</p>
                    </div>
                    <p className='green'>29.53% off</p>
                </div>
              <button style={{marginBottom:'10px'}}>Buy Now</button>
              <button>Pay Via Crypto</button>
                
                </div>
        </div>
    )
}

export default BuyCard
