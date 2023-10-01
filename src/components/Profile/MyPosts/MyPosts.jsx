import React from 'react'
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsDataElement = props.PostsData.map(m => <Post message={m.message} like={m.like}/>)
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {PostsDataElement}
        </div>
    )
}

export default MyPosts;