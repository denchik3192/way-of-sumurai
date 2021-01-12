const ADD_MESSAGE= 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT= 'UPDATE-NEW-MESSAGE-TEXT';


let initialState ={
    
    dialogs: [
        { id: 1, name: 'Denis' },
        { id: 2, name: 'Pavel' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Kirill' },
        { id: 5, name: 'Vasya' },
        { id: 6, name: 'Olya' },
        { id: 7, name: 'Viktor' },
        { id: 8, name: 'Slava' }
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'bibb' }

    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    
debugger;
    switch(action.type){
    
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText:action.newText
            };
        
            case ADD_MESSAGE: 
            let text= state.newMessageText;

       return {
            ...state,
            newMessageText :'',
            messages:[...state.messages, {id:12, message:text}]
        }

        default: 
        return state;
    
    }
    
}

export const addMessageCreator = () => ({ type:ADD_MESSAGE })

export const updateNewMessageTextCreator = (text) => 
({ type:UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;