import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, withRouter, Switch, Redirect} from "react-router-dom";
import News from "./Components/News/News";
import Musik from "./Components/Musik/Musik";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import { Component } from "react";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some Error Occured");
    console.log();
  }

  componentDidMount() { 
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">

              <Switch>
              <Route path="/dialogs"
                render={() => {
                  return <Suspense fallback={<div>Loading...</div>}>
                      <DialogsContainer/>
                  </Suspense>
                }}/>

              <Route
                path="/profile/:userId?"
                render={() => {
                  return <Suspense fallback={<div>Loading...</div>}>
                      <ProfileContainer />
                  </Suspense>
                }}/>
                
                <Route exact path="/" render={() => <Redirect to={"/profile"}/>} />
                <Route path="/news" render={() => <News />}/>
                <Route path="/musik" render={() => <Musik />}/>
                <Route path="/settings" render={() => <Settings />}/>
                <Route path="/friends" render={() => <Friends />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="*" render={() => <div> Err 404 Page not  found </div>  } />
              </Switch>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
