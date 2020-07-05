import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Post = styled.div`
    padding:18px 32px;
    box-sizing:border-box;
    border-radius:8px;
    font-family:'GoogleSans-Regular';
    font-weight:800;
    display:flex;
    flex-direction:column;
    background:#f8f8f8;
    justify-content:flex-start;
`;

const Comments = styled.div`
    padding:18px 32px;
    box-sizing:border-box;
    border-radius:8px;
    font-family:'GoogleSans-Regular';
    font-weight:800;
    display:flex;
    flex-direction:column;
    width:70%;
    background:#cdcdcd;
    align-self:flex-end;
    justify-content:flex-start;
`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    margin:5px auto;
`;

const Button = styled.button`
    width:15%;
    padding:10px 12px;
    border-radius:4px;
    color:#f7f7f7;
    background:#424B54;
    font-family: 'GoogleSans-Regular';
    font-weight: 800;
    border:none;
    outline:none;
    margin:5px 0;
    &:hover{
        cursor: pointer;
    }
`;

function StyledPost({ id, userId, title, body }) {

    const [comments, setComments] = useState([])
    const handleClick = (id) => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => {
                setComments(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Div>
            <Post>
                <div>{userId}</div>
                <h2>{title}</h2>
                <div>{body}</div>
                <Button onClick={() => handleClick(id)} >Comments</Button>
            </Post>
            <Comments>
                {
                    comments.map((comment, index) => {
                        return (
                            <Post key={index}>
                                <div>{comment.email}</div>
                                <h2>{comment.name}</h2>
                                <div>{comment.body}</div>
                            </Post>
                        )
                    })
                }
            </Comments>
        </Div>
    )
}

export default StyledPost
