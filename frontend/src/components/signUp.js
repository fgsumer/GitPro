import React from 'react'
import '../App.css'

const SignUp = () => {
  return (
    <div>
      <div className="headerSignUp">
        <div className="leftSide">
          <a href="/"><img src="https://i.ibb.co/cDXz5vG/logo.png" alt="logo" border="0" /></a>
          <div className="rightTop">
            <ul className="navMenu">
              <a href="/"><li className="menuItem">Home</li></a>
              <li className="menuItem">About us</li>
              <li className="menuItem">Contact us</li>
            </ul>
            <button className="loginInButton">Login in</button>
            <a href="/signup"> <button className="signUpButton">Get started</button></a>
          </div>
          <div className="titleSection">
            <div className="subTitle">Easy and free!</div>
            <div className="title">Take the first step<br />into your future<span className="titleEndPoint">.</span></div>
          </div>
        </div>
        <div className="rightSide">
          <form>
            <div className="signUpText">Sign up</div>
            <div className="signUpLabel">Name</div>
            <input className="signUpInput" type="text" required></input>
            <div className="signUpLabel">Email</div>
            <input className="signUpInput" type="email" required></input>
            <div className="signUpLabel">Password</div>
            <input className="signUpInput" type="password" required></input>
            <br></br>
            <button className="signUpSubmit" type="submit">Submit</button>
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
  )
}

export default SignUp;
