import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext, { Provider } from './StoreContext';

let renderEntireTree = (state) => {
    
    ReactDOM.render(
        <BrowserRouter>
            <Provider store ={store}>
                <App /> 
                </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}



renderEntireTree(store.getState());

store.subscribe(() => {
    console.log(store);
    let state = store.getState();
    renderEntireTree(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
