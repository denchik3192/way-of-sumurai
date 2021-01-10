import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './dialogs.module.css';
import { updateNewMessageTextCreator, addMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    // debugger;

    return <StoreContext.Consumer>
        { (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageCreator());
                }
                let onMessageChange = (text) => {

                    store.dispatch(updateNewMessageTextCreator(text));
                }
                return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addMessage}
                    dialogsPage={state} />

            }
        }
        </StoreContext.Consumer>
    

}

export default DialogsContainer;