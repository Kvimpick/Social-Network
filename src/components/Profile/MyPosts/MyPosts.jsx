import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{
    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostCreator(text) 
    }
    let postsElements = props.posts.map(post => <Post message = {post.message}/>)
    return (
            <div>
                My posts
                <div>
                    <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>
                    <div>
                    <button onClick = {onAddPost}>Add post</button>
                    </div>
                </div>
                {postsElements}
            </div>
    )
}

export default MyPosts