import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from './Components/News/News';
import Musik from './Components/Musik/Musik';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import initializeApp from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
render () {

  if (!this.props.initialized) {
    return <Preloader/>
  }
  

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      {/* // {props.state.sidebar}/>  */}
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer
          // addMessage={props.addMessage} 
          // updateNewMessageText={props.updateNewMessageText}
          />} />

        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />             {/*Для передачи пропсов Наш Route может мешать поэтому есть 2 вар-та это первый   */}

        <Route path='/news'> <News /> </Route>                             {/* это второй*/}
        <Route path='/musik'> <Musik /> </Route>
        <Route path='/settings'> <Settings /></Route>

        <Route path='/friends'
          render={() => <Friends
          />} />

        <Route path='/users'
          render={() => <UsersContainer />} />

        <Route path='/login'
          render={() => <LoginPage />} />

      </div>
    </div>
  );

}
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })) (App);




