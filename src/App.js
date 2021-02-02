import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';
import Musik from './Components/Musik/Musik';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


const App = (props) => {


  return (
    
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar /> 
        {/* // {props.state.sidebar}/>  */}
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer 

            // addMessage={props.addMessage} 
            // updateNewMessageText={props.updateNewMessageText}
              />} />

          <Route path='/profile' 
          render={() => <ProfileContainer />} />             {/*Для передачи пропсов Наш Route может мешать поэтому есть 2 вар-та это первый   */}
        
          <Route path='/news'> <News /> </Route>                             {/* это второй*/}
          <Route path='/musik'> <Musik /> </Route>
          <Route path='/settings'> <Settings /> </Route>

          <Route path='/friends'
            render={() => <Friends 
              />} />

          <Route path='/users' 
          render={() => <UsersContainer/>} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
