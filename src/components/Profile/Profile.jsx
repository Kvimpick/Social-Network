import React from 'react';
import classes from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return (
        <div className= {classes.content}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Big_Nature_%28155420955%29.jpeg/1200px-Big_Nature_%28155420955%29.jpeg'/>
            <div>
                ava + descriptions
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile