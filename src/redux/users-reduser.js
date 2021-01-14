const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const ADD_POST= 'ADD-POST';


let initialState = {
    posts: [
        { id: 1, fullName: 'Egor', status: 'i am a boss', location:{city:' Minsk', country:'Belarus'} },
        { id: 1, fullName: 'vika', status: 'i am a dag', location:{city:' Prague', country:'Czech Republic'} },
        { id: 1, fullName: 'vasya', status: 'i am a keller', location:{city:' Minsk', country:'Belarus'} },
        { id: 1, fullName: 'vika', status: 'i am a rapper', location:{city:' Mogilev', country:'Belarus'} },

    ],
    newPostText: 'loo'
};

const usersReducer = (state = initialState, action) => { 

    switch (action.type) {
        
                default:
                    return state;
    }
    
}
export const addPostCreator = () => ({ type:ADD_POST })

export const updateNewPostTextCreator = (text) => 
({ type:UPDATE_NEW_POST_TEXT, newText: text })

export default usersReducer;