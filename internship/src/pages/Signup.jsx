import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import Cards from '../Components/Cards';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo/logos.png";


function Signup() {
  const [sentOtp, setSentOtp] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleName(e) {
    setData({ ...data, name: e.target.value });
  }

  function handleEmail(e) {
    setData({ ...data, email: e.target.value });
  }

  function handlePassword(e) {
    setData({ ...data, password: e.target.value });
  }

  function handleConfirm(e) {
    setData({ ...data, confirmPassword: e.target.value });
  }



  function handlesentOtp(e) {
    e.preventDefault();
    if (data.email && data.password === data.confirmPassword) {
      setSentOtp(true);
      alert("You have received an OTP in your email!");
    } else {
      alert("Verify that all fields are filled out and that the passwords match.");
    }
  }

  function handleVerifyOtp(e) {
    e.preventDefault();
    alert("OTP Verified! Sign-Up successful.");
    navigate('/form');
  }


  function handleBack(){
    navigate('/');
  }

  return (
    <>
      <div className="Signup-container">

          {!sentOtp ? (
            <>
            <div className='inside-signup'>
              <div className='signup-content'>

              <h1>Sign up</h1>
              <label className="label">Name</label> <br />
              <input className="input" type="text" name="name" value={data.name} onChange={handleName} /> <br />
              <label className="label">Email</label> <br />
              <input className="input" type="email" name="email" value={data.email} onChange={handleEmail} /> <br />
              <label className="label">New Password</label>
              <br />
              <input className="input" type="password" name="password" value={data.password} onChange={handlePassword} />
              <br />
              <label className="label">Confirm Password</label>
              <br />
              <input className="input" type="password" name="confirmPassword"value={data.confirmPassword} onChange={handleConfirm}
              />
              <br />
              <button className="sign-but" onClick={handlesentOtp}>
                SEND OTP
              </button>
              <button className="sign-but">Sign In</button>

              </div>
             
             </div>

              
            </>
          ) : (
            <>
            <div className='layout'>
            <div className='layout-card'>
             <button className='back-icon' onClick={handleBack}> <FontAwesomeIcon icon={faArrowLeft}  /> Back </button> 
              <div className='top-card'>
              <Cards code="sg" title="Singapore " info="Head Office XYZ.PVT.LTD, Road To Nowhere 06-404, 500 Internal Error"/>
              </div>

            <div className='bottom-cards'>
            <Cards code="us" title="United States" info="Branches XYZ Inc. Nulltown, Buglandia, 500 0xDEADBEE"/>
             <Cards code="hk" title="Hongkong" info="Branches XYZ Pte. Ltd.The Infinite Loop Office, 404 Timeout Plaza"/>
            </div>

            </div>
           
              <div className="verify-section">
                <img src={logo} alt='logo' className='logo'/>
                <div className='verify'>
                <h2>Verify Your Email</h2>
                <p>
                  Please enter the 6-digit code we just sent to <strong>{data.email}</strong>
                </p>
                <br />
                <Input.OTP length={6} size='large' /> 
               <button  onClick={handleVerifyOtp} className='otp-button'> Verify OTP </button>
                <p>Wait 1:39 seconds before requesting a new code. </p>



                </div>
                <div className='verify-para'>
                <p>
        
        By continuing, you’re agreeing to Nobody’s <span className='blue-text'>Terms of Service, Privacy Policy and Cookie Policy.</span>
      </p>

                </div>
            
              </div>

            </div>
          
            </>
          )}
      </div>
    </>
  );
}

export default Signup;
