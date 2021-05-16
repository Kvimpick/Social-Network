import { rerenderEntireTree } from "../render"

let State = {
    profilePage: {
        posts: [
            {id: 1, message: 'I love React!'},
            {id: 2, message: 'I want to work in your company!'}
        ],
        newPostText: 'I know React!!!'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Taras'},
            {id: 2, name: 'Alina'},
            {id: 3, name: 'Pavlo'},
            {id: 4, name: 'Iulia'},
            {id: 5, name: 'Kateryna'},
            {id: 6, name: 'Trotz'}
        ],
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Bye!'},
            {id: 3, message: 'How are you??'}
        ],
        newMessageText: 'Do you know React?'
    },
    sidebar: {
         sidebarItem: [
             {id: 1, name: 'Taras'},
             {id: 2, name: 'Alina'},
             {id: 3, name: 'Pavlo'}
         ]
    }
}

export let addPost = () => {
    let newPost = {id: 3, message: State.profilePage.newPostText}
    State.profilePage.posts.push(newPost)
    State.profilePage.newPostText = ''
    rerenderEntireTree(State)
}

export let updateNewPostText = (newText) => {
    State.profilePage.newPostText = newText
    rerenderEntireTree(State)
}

export let addMessage = () =>{
    let newMessage = {id: 4, message: State.dialogsPage.newMessageText}
    State.dialogsPage.messages.push(newMessage)
    State.dialogsPage.newMessageText = ''
    rerenderEntireTree(State)
}

export let updateNewMessageText = (newText) =>{
    State.dialogsPage.newMessageText = newText
    rerenderEntireTree(State)
}
export default State

