import "./SignUp.css";
import { Link } from "react-router-dom";
import image from "../Assets/img.jpeg";



function SignUp(){
    return(
        <div className="Signup-container">
            <div className="left-side"> 
                <img className="images" src={image} alt=""/>
            </div>

            <div className="form-container">
                <div className="right-side">
                    <h3 className='welcome'>Welcome!</h3>
                    <p className='signup-info'>Sign up by entering the information below</p>
                </div>
                <form>
                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </label>

                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    
                    <label>
                        <input className="input_box"
                            type="text"
                            placeholder="Email"
                            required
                        />
                    </label>

                    <label>
                        <input className="input_box"
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
                <button className="signup-btn">
                    <Link className="login-option" to="/Verification" style={{textDecoration: "none"}}>
                        {""}
                    </Link>
                   <span className="signbtn">Sign Up</span> 
                </button>
            </div>
        </div>
    )
}

export default SignUp;
