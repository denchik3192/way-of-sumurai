import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer'
//4vAbLW!E7Qcmy7X
class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  });
  

export default connect(mapStateToProps, { logout })(HeaderContainer);