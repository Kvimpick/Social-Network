import React from 'react';
import classes from './SidebarItem.module.css'
import {NavLink} from "react-router-dom"

const SidebarItem = (props) => {
    let path = '/sidebar/' + props.id
    return (
        <div className = {classes.item + ' ' + classes.active}>
            <NavLink to={path}>
                <img src = 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg'></img>
                <div>{props.name}</div>
                </NavLink>
        </div>
    )
}

export default SidebarItem