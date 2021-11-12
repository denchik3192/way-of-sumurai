import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from './../API/API'
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCSESS = 'GET_CAPTCHA_URL_SUCSESS';

let initialState = {
    email: 'null',
    userId: 'null',
    login: 'null',
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => { 
    switch (action.type) {
        
            case SET_USER_DATA:
            case GET_CAPTCHA_URL_SUCSESS:{
        
                return{
                    ...state, 
                    ...action.payload,
                    }
            }
                default:
                    return state;
    }
    
}

export const setAuthUserData = (userId, email,  login, isAuth) => ({ type:SET_USER_DATA, payload:
      {userId, email,  login, isAuth} });
      
export const getCapchaURLSucsess = (captchaUrl) => ({ type:GET_CAPTCHA_URL_SUCSESS, payload:
      {captchaUrl} });

export const getAuthUserData = () => async (dispatch) => {
    const response  = await authAPI.me();
        if (response.data.resultCode === 0) {
          let {userId, login, email} = response.data.data;
          dispatch(setAuthUserData(userId, email, login, true));
        }   
}

export const getCaptchaURL = () => async (dispatch) => {
    const response  = await securityAPI.getCapchaURL();
        const captchaUrl = response.data.url
          dispatch(getCapchaURLSucsess(captchaUrl));
}

export const login = (captcha, email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(captcha, email, password, rememberMe)
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL(captcha));

          let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
}
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;