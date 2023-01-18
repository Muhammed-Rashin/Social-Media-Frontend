/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../../api/axios';
import './SignupAndLogin.css';
import background from './assets/Backgorund.mp4';

function SignupAndLogin() {
  const [toggle, setToggle] = useState(false);
  const [signUpData, setSignUpData] = useState({});
  const [loginData, setLoginData] = useState({});

  const navigate = useNavigate();

  const doSignup = async () => {
    const response = await instance.post('/signup', signUpData);
    if (response.data.isAuth) {
      localStorage.setItem('id', response.data.id);
      navigate('/');
    } else toast.error('Sorry,Error While Sign Up');
  };

  const doLogin = async () => {
    const response = await instance.post('/login', loginData);

    if (response.data.status) {
      localStorage.setItem('id',response.data.id);
      navigate('/');
    } else toast.error('Incorrect Email Or Password');
  };

  return (
    <div className="outer">
      <video autoPlay muted loop id="myVideo">
        <source src={background} type="video/mp4" />
      </video>

      <div
        className={`parent ${toggle && 'right-panel-active'}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#" className="sign-form">
            <h1 className="sign-h1">Create Account</h1>
            <div className="social-container">
              <a href="/#" className="social sign-a">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
            <span className="sign-span">
              {/* or use your email for registration */}
            </span>
            <input
              className="sign-input"
              type="text"
              placeholder="User Name"
              onChange={(e) => {
                setSignUpData({ ...signUpData, username: e.target.value });
              }}
            />
            <input
              className="sign-input"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setSignUpData({ ...signUpData, email: e.target.value });
              }}
            />
            <input
              className="sign-input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setSignUpData({ ...signUpData, password: e.target.value });
              }}
            />

            <input
              className="sign-input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setSignUpData({
                  ...signUpData,
                  confirmPassword: e.target.value,
                });
              }}
            />
            <button className="sign-button" type="button" onClick={doSignup}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="/#" className="sign-form">
            <h1 className="sign-h1">Sign in</h1>
            <div className="social-container">
              <a href="/#" className="social sign-a">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
            {/* <span className="sign-span">or use your account</span> */}
            <input
              className="sign-input"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
            <input
              className="sign-input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
            <a className="sign-a" href="/#">
              Forgot your password?
            </a>
            <button className="sign-button" type="button" onClick={doLogin}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="sign-h1">Welcome Back!</h1>
              <p className="sign-p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost sign-button"
                id="signIn"
                type="button"
                onClick={() => setToggle(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="sign-h1">Hello, Friend!</h1>
              <p className="sign-p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost sign-button"
                id="signUp"
                type="button"
                onClick={() => setToggle(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default SignupAndLogin;
