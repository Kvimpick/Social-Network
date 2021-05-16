import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state'

export let rerenderEntireTree = (State) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state = {State} addPost = {addPost} addMessage = {addMessage} updateNewPostText = {updateNewPostText} 
            updateNewMessageText = {updateNewMessageText}/> 
    </React.StrictMode>,
    document.getElementById('root')
  );  
}


