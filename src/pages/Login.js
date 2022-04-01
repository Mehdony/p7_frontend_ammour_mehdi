import React , { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import bgImg from '../assets/images/bgImg.webp'
import logoBig from '../assets/images/logoBig.svg'
import "../cssComponents/Register.css";

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
<>
    <div className="bg-container">
      <img src={bgImg} className='bg-img' alt="bgImg" />
   </div>
    <img className='logoBig'src={logoBig }alt='logo groupomania'/> 

    <div className="logContainer">
      <form className="logForm">
        <h3 className="log-font padding">Se connecter</h3>

        <div className="form-group">
          <label className="log-font ">Email</label>
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
          <label className="log-font ">Mot de passe</label>
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
            <label className="custom-control-label log-font " htmlFor="customCheck1">
              Se souvenir de moi
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block padding" onClick={login}>
          
          Submit
        </button>
        <p className="forgot-password text-right log-font">
          Créer un compte ? <a  href="/register">S'inscrire</a>
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
