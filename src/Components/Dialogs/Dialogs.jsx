import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './dialogs.module.css';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validator';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    
    let dialogsElements =
        state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElememts =
        state.messages.map(message => <Message message={message.message} key={message.id} />);

    let newMessageText = state.newMessageText;


    let addNewMessage = (values) => {
        
        props.addMessage(values.newMessageText);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}> 
                <div>{messageElememts}</div>

                <ReduxDialogsForm onSubmit={addNewMessage}/>
            
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea"
            validate={[required, maxLength10]}  name="newMessageText" placeholder="enter message"/>
        </div>

    <div>
        <button className="message-button" >send</button>
    </div>
</form>
    )     
}

const ReduxDialogsForm = reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)
export default Dialogs;