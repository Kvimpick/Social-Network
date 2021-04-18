import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{

    let postsElements = props.posts.map(post => <Post message = {post.message}/>)
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <div>
                    <button>Add post</button>
                    </div>
                </div>
                {postsElements}
            </div>
    )
}

export default MyPosts