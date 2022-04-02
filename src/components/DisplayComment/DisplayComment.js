import React from 'react';
import axios from 'axios';
import "./DisplayComment.css";


const Showcomments = (props) => {
    const comData = props.comData
    const userId = props.userId
    const username = props.username
    const token = localStorage.getItem("token")

    const handleDeleteComment = async (e) => {
    
        e.preventDefault()
        const id = props.postId
        console.log(comData);
        const commentId = props.comData.id
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }

    
    
        const response = await axios.delete(`http://localhost:8080/api/tutorials/${id}/comment/${commentId}`, config)
        console.log(response)
        props.setPost((oldState) => {
            const posts = [...oldState]
            const index = posts.findIndex(post => post.id === id )
            const comIndex = posts[index].comments.findIndex(comment => comment.id === commentId )
            posts[index].comments.splice(comIndex, 1)

            
          return posts
        })
    
    }
            return (
                <div className='comment' key={comData.key}>
                    <div className='comment-id-container'>
                        <h3 className='comment-id'>{comData.name}</h3>
                        <p className='comment-content'>{comData.text}</p>
                    </div>
                    <div className='comment-button-container'>
                       { username === comData.name ? <button className='comment-button' onClick={handleDeleteComment} aria-label="Left Align">Supprimer</button> : null }

                    </div>

                </div>
            )
            
        
    }



export default Showcomments;