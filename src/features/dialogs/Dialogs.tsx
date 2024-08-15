// @flow
import * as React from 'react';
import { ChangeEvent, RefObject } from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { DialogsPropsType } from "./DialogsContainer";
import { NewMessageFormRedux, NewMessageFormType } from "features/dialogs/NewMessageForm";

export const Dialogs = ({dialogsPage, addMessage}: DialogsPropsType) => {


    const onSubmit = (formData: NewMessageFormType) => {
        addMessage(formData.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsPage.dialogs.map(name => (<DialogItem key={name.id} name={name.name} id={name.id}/>))}
            </ul>
            <div className={s.messagesItems}>
                {dialogsPage.messages.map((message) => (
                    <Message key={message.id} message={message.message}/>
                ))}
            </div>
            <NewMessageFormRedux onSubmit={onSubmit}/>
            {/*<div>*/}
            {/*    /!*<textarea*!/*/}
            {/*    /!*    ref={newMessage}*!/*/}
            {/*    /!*    placeholder={'Enter your message...'}*!/*/}
            {/*    /!*    onChange={onChangeHandler}*!/*/}
            {/*    /!*    value={dialogsPage.newMessageText}></textarea>*!/*/}
            {/*    /!*<button onClick={addNewMessage}>Add message</button>*!/*/}
            {/*</div>*/}
        </div>
    );
};