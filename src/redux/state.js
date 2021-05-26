const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let store = {
    _state: {
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
    },
    _callSubscriber (){
        console.log('state changed');
    },
    getstate (){
        return this._state
    },
    subscribe (observer){
        this._callSubscriber = observer
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {id: 3, message: this._state.profilePage.newPostText}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST){
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)
        }
        else if (action.type === ADD_MESSAGE){
        let newMessage = {id: 4, message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE){
        this._state.dialogsPage.newMessageText = action.newText
        this._callSubscriber(this._state)
        }
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE ,
    newText: text
})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text 
})

export default store
window.store = store

