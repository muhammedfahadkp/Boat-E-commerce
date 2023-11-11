import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_logo from '../Assets/instagram.png'
import facebook_logo from '../Assets/facebook.png'
import twitter_logo from '../Assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
      <ul className="footer-items">
        <li>Contact Us</li>
        <li>Terms and Condition</li>
      </ul>
      <div className="footer_social_icon">

        <div className="footer_icon_container">
            <img src={facebook_logo} alt="" />
        </div>

        <div className="footer_icon_container">
            <img src={twitter_logo} alt="" />
        </div>

        <div className="footer_icon_container">
            <img src={instagram_logo} alt="" />
        </div>

      </div>

    <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2023 All Right Reserved </p>
    </div>

    </div>
  )
}

export default Footer
