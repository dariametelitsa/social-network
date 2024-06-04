// @flow
import * as React from 'react';
import { ChangeEvent, RefObject } from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { dialogType, messageType } from "../../redux/store";

type DialogsProps = {
    dialogsPage: {
        dialogs: dialogType[]
        messages: messageType[]
        newMessageText: string
    },
    addMessage: () => void
    changeNewMessage: (newText: string) => void
}

export const Dialogs = ({dialogsPage, addMessage, changeNewMessage}: DialogsProps) => {
    const newMessage: RefObject<HTMLTextAreaElement> = React.createRef();

    const addNewMessage = () => {
        addMessage();
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewMessage(e.currentTarget.value);
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
            <div>
                <textarea
                    ref={newMessage}
                    placeholder={'Enter your message...'}
                    onChange={onChangeHandler}
                    value={dialogsPage.newMessageText}></textarea>
                <button onClick={addNewMessage}>Add message</button>
            </div>
        </div>
    );
};