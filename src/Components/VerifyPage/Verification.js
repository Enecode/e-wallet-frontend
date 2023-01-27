import React, { useEffect } from "react";
import './verify.css'
import image from "../Assets/img.jpeg"
import SignUp from "../SignUP/SignUp";
import { Link } from "react-router-dom";

const Verification = props => {

  if (!props.show){
    return null
  }
  return (
    <div className="verify-container">
      <div className="Signup-container">
          <div className="left-side"> 
            <img className="images" src={image} alt=""/>
          </div>

        <div className="right-side-container">
          <div className="form-container">
            <div className="right-side">
              <h3 className='welcome'>Welcome!</h3>
              <p className='signup-info'>Sign up by entering the information below</p>
            </div>
            <form>
              <label>
                <input 
                  className="input_box"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </label>

              <label>
                <input 
                  className="input_box"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </label>
                    
              <label>
                <input
                  className="input_box"
                  type="text"
                  placeholder="Email"
                  required
                />
              </label>

              <label>
                <input 
                  className="input_box"
                  type="text"
                  placeholder="Password"
                  required
                />
              </label>

            </form>
            
            <div className="optionsContainer">
              <p className='signup-option'>Already have an account?</p>
                <p>
                  <Link className="login-option" to="/LogIn" style={{textDecoration: "none"}}>
                      {""}
                      LogIn
                  </Link>
                </p>
            </div>
            <button 
              className="signup-btn"
                to="/Verification" 
            >
            <Link className="login-option" to="/Verification" style={{textDecoration: "none"}}>
                {""}
            </Link>
              <a href="/Verification" style={{textDecoration: "none"}}>
                <span className="signbtn">Sign Up</span> 
              </a></button>
            </div>
          </div>
        </div>
      <div className="content-container">
        
        <div className="content-holder">
          <h1 className="content"> Kindly Check your mail to see your OTP number for Account verification</h1>
        </div>
      </div>
    </div>
  );
}

export default Verification;