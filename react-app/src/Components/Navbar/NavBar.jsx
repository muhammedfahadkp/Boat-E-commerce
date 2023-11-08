import React, { useState } from 'react'
import './NavBar.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

const NavBar = () => {

    const [menu, setMenu] = useState("HeadDrop")


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>EarDrum</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("HeadDrops")}}>HeadDrops {menu==="HeadDrops" ? <hr/> : <></> }</li>
        <li onClick={()=>{setMenu("OverHead")}}>OverHead {menu==="OverHead" ? <hr/> : <></> }</li>
        <li onClick={()=>{setMenu("OnEar")}}>OnEar {menu==="OnEar" ? <hr/> : <></> }</li>
        <li onClick={()=>{setMenu("BarSound")}}>BarSound {menu==="BarSound" ? <hr/> : <></> }</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  )
}

export default NavBar
