import React from 'react';
import classes from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return (
        <div>
            <div>
                ava + descriptions
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile