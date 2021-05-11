import React from 'react';
import classes from './Sidebar.module.css'
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) => {

    let sidebarElements = props.state.sidebarItem.map (item => <SidebarItem name = {item.name} id = {item.id}/>)

    return (
        <div className={classes.sidebarItems}>
            {sidebarElements}
        </div>
    )
}

export default Sidebar
