import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>{
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post message = 'I love React!'/>
                <Post message = 'I want to work in your company!'/>
            </div>
    )
}

export default MyPosts