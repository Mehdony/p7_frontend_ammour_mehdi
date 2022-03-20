import React from 'react'
import '../cssComponents/Register.css'

function Register() {
  return (
    <div className="logContainer">

    <form className='logForm'>
    <h3>Sign Up</h3>


    <div className="form-group">
        <label>username</label>
        <input type="text" className="form-control" placeholder="saisissez votre nom et prénom" />
    </div>

    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="saisissez votre email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="saisissez un mot de passe" />
    </div>

    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
    <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
    </p>
</form>
</div>
  )
}

export default Register