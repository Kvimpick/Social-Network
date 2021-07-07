import React from 'react';
import StoreContext from '../../../StoreContext';
import classes from './Sidebar.module.css'
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().sidebar
                    let sidebarElements = state.sidebarItem.map (item => <SidebarItem name = {item.name} id = {item.id}/>)

    return (
        <div className={classes.sidebarItems}>
            {sidebarElements}
        </div>
    )
                } 
            }
        </StoreContext.Consumer>
    )

    
}

export default Sidebar
