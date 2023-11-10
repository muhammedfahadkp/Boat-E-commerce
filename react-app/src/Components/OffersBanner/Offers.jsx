import React from 'react'
import './Offers.css'
import pod_image from "../Assets/Offer Pod.png"

const Offers = () => {
  return (
    <div className='offers'>
        
        <div className="offers_left">
            <h1>Flat 45% Offer</h1>
            <button>Buy Now</button>
        </div>

        <div className="offers_right">
            <img src={pod_image} alt="" />
        </div>

    </div>
  )
}

export default Offers
