import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import setAuthUserData from '../../redux/auth-reducer'

//4vAbLW!E7Qcmy7X
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials:true
    })
      .then(response => {
        // debugger;
        if (response.data.resultCode === 0) {
          
          let {email, id, login} = response.data.data;
          this.props.setAuthUserData(email, id, login);
        }
        
      });
  }

  render() {
    return <Header {...this.props} />
  }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
  })
  

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);