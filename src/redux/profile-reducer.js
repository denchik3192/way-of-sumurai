const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const ADD_POST= 'ADD-POST';
const SET_USER_PROFILE= 'SET_USER_PROFILE';



let initialState = {
    posts: [
        { id: 1, message: 'Hi, it\'s my firs post', likesCount: 12 },
        { id: 2, message: 'Hi, it\'s my second post', likesCount: 122 },

    ],
    newPostText: 'loo',
    profile: null
};

const profileReducer = (state = initialState, action) => { 

    switch (action.type) {
        case ADD_POST:  {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 1
                }
                return {
                    ...state,
                    posts:[...state.posts, newPost],
                    newPostText:''
                };
                
            }
        case UPDATE_NEW_POST_TEXT: {
            return{...state,
                newPostText:action.newText
            };
        }

        case SET_USER_PROFILE: {
            return{...state,
                profile: action.profile
            };
        }
                default:
                    return state;
    }
    
}
export const addPostCreator = () => ({ type:ADD_POST })

export const updateNewPostTextCreator = (text) => 
({ type:UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile})

export default profileReducer;