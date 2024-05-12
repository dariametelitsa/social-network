// @flow
import * as React from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { dialogType, messageType } from "../../redux/state";
import { RefObject } from "react";

type DialogsProps = {
    dialogsData: dialogType[]
    messages: messageType[]
}

export const Dialogs = ({dialogsData, messages}: DialogsProps) => {
    const newMessage: RefObject<HTMLTextAreaElement> = React.createRef();

    const addNewMessage = () => {
        const message = newMessage.current?.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsData.map(name => (<DialogItem key={name.id} name={name.name} id={name.id}/>))}
            </ul>
            <div className={s.messagesItems}>
                {messages.map((message) => (
                    <Message key={message.id} message={message.message}/>
                ))}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addNewMessage}>Add message</button>
            </div>
        </div>
    );
};