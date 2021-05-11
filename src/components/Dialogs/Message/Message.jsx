import React from 'react'
import s from './../Dialogs.module.css'

const Message = (props) =>{
    return (
        <div className={s.message}>
            <img src = 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg'></img>
        {props.message}</div>
    )
}

export default Message