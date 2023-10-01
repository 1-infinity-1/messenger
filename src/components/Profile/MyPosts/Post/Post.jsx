import React from 'react'
import LikePost from './LikePost/LikePost'
import MessagePost from "./MessagePost/MessagePost";

const Post = (props) => {
    return (
        <div>
            <MessagePost message={props.message}/>
            <LikePost like={props.like}/>
        </div>
    )
}

export default Post;