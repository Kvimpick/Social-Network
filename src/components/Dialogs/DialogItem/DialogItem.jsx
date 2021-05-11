import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
        <img src = 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg'></img>
            {props.name}</NavLink></div>
    )
}

export default DialogItem