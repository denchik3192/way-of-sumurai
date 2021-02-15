import {authAPI} from './../API/API'
const SET_USER_DATA= 'SET_USER_DATA';


let initialState = {
    email: 'null',
    id: 'null',
    login: 'null',
    isAuth: false
};

const authReducer = (state = initialState, action) => { 
// debugger;
    switch (action.type) {
        
            case SET_USER_DATA:{
        
                return{
                    ...state, 
                    ...action.data,
                    isAuth: true}
                
            }
                default:
                    return state;
    }
    
}

export const setAuthUserData = (email, id, login) => ({ type:SET_USER_DATA, data:{email, id, login}})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {

          let {email, id, login} = response.data.data;
          // this.props.setAuthUserData(email, id, login);
          dispatch(setAuthUserData(email, id, login));
        }
        
      });
}

export default authReducer;