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
    getstate (){
        return this._state
    },
    _callSubscriber (){
        console.log('state changed');
    },
    addPost (){
        let newPost = {id: 3, message: this._state.profilePage.newPostText}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage (){
        let newMessage = {id: 4, message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText (newText){
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer){
        this._callSubscriber = observer
    }
}

export default store
window.store = store

