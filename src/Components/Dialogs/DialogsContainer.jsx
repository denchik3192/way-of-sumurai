import React from 'react';
import { updateNewMessageTextCreator, addMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// const DialogsContainer = () => {
//     // debugger;

//     return <StoreContext.Consumer>
//         { (store) => {
//                 let state = store.getState().dialogsPage;

//                 let addMessage = () => {
//                     store.dispatch(addMessageCreator());
//                 }
//                 let onMessageChange = (text) => {

//                     store.dispatch(updateNewMessageTextCreator(text));
//                 }
//                 return <Dialogs updateNewMessageText={onMessageChange}
//                     addMessage={addMessage}
//                     dialogsPage={state} />

//             }
//         }
//         </StoreContext.Consumer>
    

// }

let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewMessageText: () =>{
            dispatch(addMessageCreator());
        },
        addMessage: (text) =>{
            dispatch(updateNewMessageTextCreator(text));
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;