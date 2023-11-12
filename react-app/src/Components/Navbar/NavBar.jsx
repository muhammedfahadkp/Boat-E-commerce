import React, { useState } from 'react';
import './NavBar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import user_pic from '../Assets/user_pic.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menu, setMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setMenu(menu);
  };

  const handleMouseLeave = () => {
    setMenu(null);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>EarDrum</p>
      </div>
      <ul className="nav-menu">
        <li
          onMouseEnter={() => handleMouseEnter('Shop')}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: menu === 'Shop' || window.location.pathname === '/' ? '#FF5733' : '#626262',
            }}
          >
            Shop
          </Link>{' '}
          {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('HeadDrop')}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/HeadDrop"
            style={{
              textDecoration: 'none',
              color: menu === 'HeadDrop' || window.location.pathname === '/HeadDrop' ? '#FF5733' : '#626262',
            }}
          >
            HeadDrop
          </Link>{' '}
          {menu === 'HeadDrop' ? <hr /> : <></>}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('OnEar')}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/OnEar"
            style={{
              textDecoration: 'none',
              color: menu === 'OnEar' || window.location.pathname === '/OnEar' ? '#FF5733' : '#626262',
            }}
          >
            OnEar
          </Link>{' '}
          {menu === 'OnEar' ? <hr /> : <></>}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('BarSound')}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/BarSound"
            style={{
              textDecoration: 'none',
              color: menu === 'BarSound' || window.location.pathname === '/BarSound' ? '#FF5733' : '#626262',
            }}
          >
            BarSound
          </Link>{' '}
          {menu === 'BarSound' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
       <Link to={'./LoginSignup'}><button>Login</button></Link>
        <div className="user-profile">
          <img src={user_pic} alt="" className="user_profile_pic" />
        </div>
        <img src={cart_icon} alt="cart_icon" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  );
};

export default NavBar;
