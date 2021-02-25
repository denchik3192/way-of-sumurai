import { usersAPI } from './../API/API'
import { profileAPI } from './../API/API'

const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const ADD_POST= 'ADD-POST';
const SET_USER_PROFILE= 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';
const UPDATE_USER_STATUS= 'UPDATE_USER_STATUS';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, it\'s my first post', likesCount: 12 },
        { id: 2, message: 'Hi, it\'s my second post', likesCount: 122 },

    ],
    newPostText: 'loo',
    profile: null,
    status: ""
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

        case SET_STATUS: {
            return{...state,
                status: action.status
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
export const setStatus = (status) =>({type:SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
    });
}


export const getStatus = (userId) => (dispatch) => { 
    profileAPI.getStatus(userId)
    .then(response => {
        // debugger;
        dispatch(setStatus(response.data));
});

}

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
        
});

}


export default profileReducer;