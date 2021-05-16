import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{
    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    let postsElements = props.posts.map(post => <Post message = {post.message}/>)
    return (
            <div>
                My posts
                <div>
                    <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>
                    <div>
                    <button onClick = {addPost}>Add post</button>
                    </div>
                </div>
                {postsElements}
            </div>
    )
}

export default MyPosts