import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}><NavLink to='/dialogs/1'>Taras</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Alina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Pavlo</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Iulia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Kateryna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Trotz</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>Bye!</div>
                <div className={s.message}>How are you??</div>
            </div>
        </div>
    )
}

export default Dialogs