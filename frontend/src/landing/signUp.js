import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Redirect } from 'react-router';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);

  const submitForm = () => {
    axios
      .post('http://localhost:5000/user', { username, email, password }) // BEFORE MERGE: .post('http://localhost:5000/user', { email, password, name })
      .then(e => {
        console.log(e.data);
        if (e.data.token) {
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('username', e.data.user.username);
          localStorage.setItem('ID', e.data.user.id);

          setRegistered(true);
        } else {
          setRegistered(false);
        }
      })

      .catch(err => {
        console.log(err);
      });
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = p => {
    setPassword(p.target.value);
  };

  const handleUsernameChange = p => {
    // BEFORE MERGE: const handleNameChange = p => { setName(p.target.value)};
    setUsername(p.target.value);
  };

  return (
    <div>
      {registered ? (
        <Redirect to="/auth" />
      ) : (
        <div>
          <div className="headerSignUp">
            <div className="leftSide">
              <a href="/">
                <img src="https://i.ibb.co/cDXz5vG/logo.png" alt="logo" border="0" />
              </a>
              <div className="rightTop">
                <ul className="navMenu">
                  <a href="/">
                    {' '}
                    <li className="menuItem">Home</li>
                  </a>
                  <li className="menuItem">About us</li>
                  <li className="menuItem">Contact us</li>
                </ul>
                <button className="loginInButton">Login in</button>
                <a href="/signup">
                  {' '}
                  <button className="signUpButton">Get started</button>
                </a>
              </div>
              <div className="titleSection">
                <div className="subTitle">Easy and free!</div>
                <div className="title">
                  Take the first step
                  <br />
                  into your future<span className="titleEndPoint">.</span>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  submitForm();
                }}
              >
                {' '}
                <div className="signUpText">Sign up</div>
                <div className="signUpLabel">GitHub username</div>
                <input
                  className="signUpInput"
                  type="text"
                  required
                  onChange={handleUsernameChange}
                  value={username}
                ></input>
                <div className="signUpLabel">Email</div>
                <input
                  className="signUpInput"
                  type="email"
                  required
                  onChange={handleEmailChange}
                  value={email}
                ></input>
                <div className="signUpLabel">Password</div>
                <input
                  className="signUpInput"
                  type="password"
                  required
                  onChange={handlePasswordChange}
                  value={password}
                ></input>
                <br></br>
                <button className="signUpSubmit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <footer>
            <div className="footerContainer">
              <img className="logoMin" src="https://i.ibb.co/jgJW3wx/logomin.png" alt="logomin" />
              <div className="copyrightText">All rights are reserved</div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default SignUp;
