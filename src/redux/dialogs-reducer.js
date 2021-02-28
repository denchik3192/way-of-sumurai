const ADD_MESSAGE= 'ADD-MESSAGE';


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

    ]
};

const dialogsReducer = (state = initialState, action) => {

    // let stateCopy;
    

    switch(action.type){
    
            case ADD_MESSAGE: 
            let text = action.newMessageText;

    return {
            ...state,
            messages:[...state.messages, {id:12, message:text}]
        }

        default: 
        return state;
    
    }
    
}

export const addMessageCreator = (newMessageText) => ({ type:ADD_MESSAGE, newMessageText })



export default dialogsReducer;