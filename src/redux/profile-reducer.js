const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const ADD_POST= 'ADD-POST';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, it\'s my firs post', likesCount: 12 },
        { id: 2, message: 'Hi, it\'s my second post', likesCount: 122 },

    ],
    newPostText: 'loo'
};

const profileReducer = (state = initialState, action) => { 

    switch (action.type) {
        case ADD_POST:  {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 1
                }
                let stateCopy= {...state};
                stateCopy.posts=[...state.posts];
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.posts = {...state.posts};
                stateCopy.newPostText = action.newText;
                return stateCopy;
        }
                default:
                    return state;
    }
    
}
export const addPostCreator = () => ({ type:ADD_POST })

export const updateNewPostTextCreator = (text) => 
({ type:UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;