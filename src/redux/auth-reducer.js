import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from './../API/API'
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCSESS = 'GET_CAPTCHA_URL_SUCSESS';

let initialState = {
    email: null,
    userId: null,
    login: null,
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

export const setAuthUserData = (userId, email,  login, isAuth) => ({ type: SET_USER_DATA, payload:
      {userId, email,  login, isAuth} });
      
export const getCapchaUrlSucsess = (captchaUrl) => ({ type:GET_CAPTCHA_URL_SUCSESS, payload:
      {captchaUrl} });

export const getAuthUserData = () => async (dispatch) => {
    const response  = await authAPI.me();
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          console.log(response.data.data);
          dispatch(setAuthUserData(id, email, login, true));
        }   
}

export const login = ( email, password, rememberMe, captcha) => async (dispatch) => {
  
    const response = await authAPI.login( email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl(captcha));

          let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
}
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response  = await securityAPI.getCapchaUrl();
      const captchaUrl = response.data.url
        dispatch(getCapchaUrlSucsess(captchaUrl));
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;