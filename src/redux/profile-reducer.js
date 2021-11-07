import { stopSubmit } from "redux-form";
// import { usersAPI } from "./../API/API";
import { profileAPI } from "./../API/API";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCSESS = "SAVE_PHOTO_SUCCSESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, it's my first post", likesCount: 12 },
    { id: 2, message: "Hi, it's my second post", likesCount: 122 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 1,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case SAVE_PHOTO_SUCCSESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccsess = (photos) => ({ type: SAVE_PHOTO_SUCCSESS, photos });

export const getUserProfile = (userId) => async(dispatch) => {//TODO fix hardcode in api
   let data = await profileAPI.getProfile(userId);
   console.log(data.data);
   dispatch(setUserProfile(data.data));
};

export const getStatus = (userId) => async (dispatch) => {
  // debugger;
  let response = await  profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    // debugger;
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    // debugger;
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccsess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    // debugger;
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
      return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;
