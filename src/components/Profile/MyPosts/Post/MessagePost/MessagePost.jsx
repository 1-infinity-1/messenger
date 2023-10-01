import React from "react";
import c from './MessagePost.module.css'
const MessagePost = (props) => {
    return (
        <div className={c.item}>
            <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"/>
            {props.message}
        </div>
    )
}
export default MessagePost;