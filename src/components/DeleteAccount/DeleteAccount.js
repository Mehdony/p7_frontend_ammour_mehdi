import React from 'react'
import axios from 'axios'

export default function DeleteAccount() {

   const  handleDeleteAccount = (props) => {

    const token = localStorage.getItem("token")
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const userId = localStorage.getItem("userId")

    const response = axios.delete(`http://localhost:8080/api/auth/users/${userId}`, config)
    console.log(response)
    localStorage.clear()
    window.location.reload()
  }

    
    
  return (
    <button
            className="profil-button btn btn-primary"
            onClick={handleDeleteAccount}
          >
            Supprimer le compte
          </button>
  )
}
