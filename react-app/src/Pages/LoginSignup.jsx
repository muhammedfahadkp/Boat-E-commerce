import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginSignup'>
      <div className="loginSignup_container">
        <h1>Sign Up</h1>
        <hr />
        <div className="loginSignup_Fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Enter Your Email' />
          <input type="password" placeholder='Enter Password'/>
        </div>
        <button>Lets Go</button>
        <p className="loginSignup_Login">Already have a Account <span>Login</span> Here </p>
        <div className="loginSignup_Agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I Agree to the <span>Terms</span> & <span>Condition</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
