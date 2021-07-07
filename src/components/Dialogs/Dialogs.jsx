import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map (dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)
    let messagesElements = state.messages.map (message => <Message message = {message.message}/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        let body = newMessageElement.current.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange = {onMessageChange} ref = {newMessageElement} value = {state.newMessageText} />
                    <div>
                        <button onClick = {addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs