import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    
    _state: {
        profilePage: {

            posts: [
                { id: 1, message: 'Hi, it\'s my firs post', likesCount: 12 },
                { id: 2, message: 'Hi, it\'s my second post', likesCount: 122 },

            ],
            newPostText: 'loo'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Denis' },
                { id: 2, name: 'Pavel' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Kirill' },
                { id: 5, name: 'Vasya' },
                { id: 6, name: 'Olya' },
                { id: 7, name: 'Viktor' },
                { id: 8, name: 'Slava' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how are you?' },
                { id: 3, message: 'slut' }

            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Denis', img: 'https://hypeava.ru/uploads/posts/2018-05/1527186603_7.png' },
                { id: 2, name: 'Pavel', img: 'https://hypeava.ru/uploads/posts/2018-05/1527186603_7.png' },
                { id: 3, name: 'Sasha', img: 'https://download-cs.net/steam/avatars/3412.jpg' },
            ]
        }

    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;// observer это паттерн
    },
    
    
    dispatch(action) {//action-object{type:'ADD-POST'}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
        }

}

window.state = store;
export default store;
