import React , { useState } from "react";
import "../cssComponents/Login.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:8080/api/auth/login',{email , password} )
    console.log(response)
    navigate('/')
    localStorage.setItem('userId', response.data.userId)
    localStorage.setItem('username', response.data.username)
    localStorage.setItem('token', response.data.token)
  }

  

  return (

    <div className="logContainer">
      <form className="logForm">
        <h3>Se connecter</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={login}>
          
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
