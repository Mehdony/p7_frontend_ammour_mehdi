import React, { useState } from 'react';
import axios from 'axios';

const CreateComment = (props) => {

    const [content, setContent] = useState('')

    const handleSend = async (e) => {
        e.preventDefault()

        const username = props.username 
        const setId = props.setId

        console.log("setUser :", username);

        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }

        const response = await axios.post(
            'http://localhost:8080/api/tutorials/:tutorialId/comment', {
            name: username,
            text: content,
            tutorialId: setId
        },
            config)


        console.log('new commentaire', response.data)

        props.setPost((oldState) => {
            const posts = [...oldState]
            const index = posts.findIndex(post => post.id === response.data.tutorialId)
            posts[index].comments.push(response.data)
            console.log('new state', posts)
            return posts
        })

        setContent('')
    }


    return (
        <form onSubmit={(e) => { handleSend(e) }} className='comment-form'>
            
            <input
                type="text"
                placeholder='write your comment here'
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
                aria-label='comment-input'
                className='comment-post' />
            
        </form>
    )
}


export default CreateComment;