import React, { useEffect, useState } from 'react'
import './Offers.css'
import pod_Banner from '../Assets/Green.png'
import onEar_Banner from '../Assets/OnEarBanner.png'
import bar_Banner from '../Assets/BarSoundBanner.png'

const Offers = () => {

  const banners = [pod_Banner, onEar_Banner, bar_Banner]
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() =>{
      setCurrentBannerIndex((prevIndex) => (prevIndex+1) % banners.length )
    }, 5000)

    return () => clearInterval(intervalId)

  }, [currentBannerIndex, banners.length])


  return (
    <div className='offers'>
        
       <img className='offer_banner' src={banners[currentBannerIndex]} alt="" />

    </div>
  )
}

export default Offers
