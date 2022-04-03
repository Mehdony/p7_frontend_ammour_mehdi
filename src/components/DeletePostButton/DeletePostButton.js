import React from 'react'
import axios from 'axios'
import './DeletePostButton.css'

export default function DeletePostButton(props) {

    const token = localStorage.getItem('token')


    const handleDeletePost = async (e) => {

        e.preventDefault()
        const id = props.postId
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
    
        const response = await axios.delete(`http://localhost:8080/api/tutorials/${id}`, config)
        console.log(response)
        props.setPost((oldState) => {
          const posts = [...oldState]
          const index = posts.findIndex(post => post.id === id)
          posts.splice(index, 1)
          console.log('new state', posts)
          return posts
        })
    
    
      }
  return (
    <bouton onClick={handleDeletePost} className="btn btn-primary bouton" >Supprimer post</bouton>
  )
}
