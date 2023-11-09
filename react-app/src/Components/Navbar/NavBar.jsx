import React, { useState } from 'react'
import './NavBar.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import user_pic from "../Assets/user_pic.png"

const NavBar = () => {

    const [menu, setMenu] = useState("HeadDrop")


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>EarDrum</p>
      </div>
      <ul className="nav-menu">
        <li onMouseEnter={()=>{setMenu("Shop")}}>Shop {menu==="Shop" ? <hr/> : <></> }</li>
        <li onMouseEnter={()=>{setMenu("HeadDrop")}}>HeadDrop {menu==="HeadDrop" ? <hr/> : <></> }</li>
        <li onMouseEnter={()=>{setMenu("OnEar")}}>OnEar {menu==="OnEar" ? <hr/> : <></> }</li>
        <li onMouseEnter={()=>{setMenu("BarSound")}}>BarSound {menu==="BarSound" ? <hr/> : <></> }</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <div className="user-profile">
        <img src={user_pic} alt="" className='user_profile_pic'/>
        </div>
        <img src={cart_icon} alt="cart_icon" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  )
}

export default NavBar
