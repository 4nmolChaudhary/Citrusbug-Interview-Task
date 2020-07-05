import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StyledPost from './StyledPost'


function Posts() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                posts.map((post, index) => {
                    return (
                        <StyledPost key={index}
                            id={post.id}
                            userId={post.userId}
                            body={post.body}
                            title={post.title}

                        />
                    )
                })
            }
        </div>
    )
}

export default Posts
