import React, { useState } from "react";
import "../cssComponents/Register.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Register() {

  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  let navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:8080/api/auth/signup',{ email: emailReg , username: usernameReg , password: passwordReg} )
    console.log(response)
    navigate('/login')
  }

  return (
    <div className="logContainer">
      <form className="logForm">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="saisissez votre email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>username</label>
          <input
            type="text"
            className="form-control"
            placeholder="saisissez votre nom et prénom"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="saisissez un mot de passe"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>

        <button
          onClick={signup}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
