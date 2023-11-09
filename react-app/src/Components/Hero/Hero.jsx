import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrow.png'
import hero_video from '../Assets/Hero Video.mp4'

function Hero() {
  return (
    <div className='hero'>

      <div className="hero_left">
        <h2>Its Truly Yours</h2>
        <p>Enjoy the Original Sound</p>
        <div className="hero_button">
            <div>Buy Now</div>
            <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero_right">
        <video src={hero_video} autoPlay loop muted></video>
      </div>

    </div>
  )
}

export default Hero
