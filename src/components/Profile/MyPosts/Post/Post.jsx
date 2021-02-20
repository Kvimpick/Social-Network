import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
    return (
                    <div className ={classes.item}>
                        <img src = 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg'></img>
                        {props.message}
                    </div>
    )
}

export default Post