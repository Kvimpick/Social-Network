import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageCreator} from '../../redux/state'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map (dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)
    let messagesElements = props.state.messages.map (message => <Message message = {message.message}/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange = {onMessageChange} ref = {newMessageElement} value = {props.newMessageText} />
                    <div>
                        <button onClick = {addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs