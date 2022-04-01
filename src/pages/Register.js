import React, { useState } from "react";
import "../cssComponents/Register.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import bgImg from '../assets/images/bgImg.webp'
import logoBig from '../assets/images/logoBig.svg'

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
    <>
    <div className="bg-container">
      <img src={bgImg} className='bg-img' alt="bgImg" />
   </div>
    <img className='logoBig'src={logoBig }alt='logo groupomania'/>
    <div className="logContainer">
      <form className="logForm">
        <h3 className="log-font padding">Inscription</h3>

        <div className="form-group">
          <label className="log-font font-log">Email</label>
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
          <label className="log-font font-log">Nom et prénom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Saisissez votre nom et prénom"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="log-font font-log">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Saisissez un mot de passe"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>

        <button
          onClick={signup}
          type="submit"
          className="btn btn-primary btn-block padding"
        >
          Créer un compte
        </button>
        <p className="forgot-password text-right log-font">
          Deja un compte ? <a  href="/login">Se connecter</a>
        </p>
      </form>
    </div>
  </>
  );
}

export default Register;
