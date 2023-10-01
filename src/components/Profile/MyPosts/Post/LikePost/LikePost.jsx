import React from "react";
import c from './LikePost.module.css';

const LikePost = (props)=>{
    return(
        <div className={c.likepost}>
            <img src="https://w7.pngwing.com/pngs/128/895/png-transparent-like-icon-facebook-social-media-like-button-thumb-signal-like-blue-angle-rectangle.png" />
            {props.like}
        </div>
    )
}

export default LikePost;