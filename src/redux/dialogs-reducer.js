const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_MESSAGE:
            let newMessage = {id: 4, message: state.newMessageText}
        state.messages.push(newMessage)
        state.newMessageText = ''
        return state

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText
        return state

        default: 
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBody = (body) => ({
    type: UPDATE_NEW_MESSAGE ,
    newText: body
})

export default dialogsReducer