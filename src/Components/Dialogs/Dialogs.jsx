import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './dialogs.module.css';




const Dialogs = (props) => {
    let state = props.dialogsPage;
    
    let dialogsElements =
        state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElememts =
        state.messages.map(message => <Message message={message.message} />);

    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value; 
        props.updateNewMessageText(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}> 
                <div>{messageElememts}</div>
                <div>
                    <div><textarea placeholder="enter message" 
                    onChange={ onMessageChange } 
                    value={newMessageText}/></div>

                <div><button className="message-button" onClick={addMessage}>
                    Send Message
                </button></div>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;