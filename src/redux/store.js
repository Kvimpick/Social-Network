import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store

