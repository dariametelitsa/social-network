// @flow
import * as React from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import {
    dialogType,
    DispatchActionTypes,
    messageType, store
} from "../../redux/store";
import { ChangeEvent, RefObject } from "react";
import { AddMessageAction, ChangeNewMessageAction } from "../../redux/dialogsReducer";

type DialogsProps = {
    dialogsPage: {
        dialogs: dialogType[]
        messages: messageType[]
        newMessageText: string
    },
    dispatch: (action: DispatchActionTypes) => void
}

export const Dialogs = ({dialogsPage, dispatch}: DialogsProps) => {
    const newMessage: RefObject<HTMLTextAreaElement> = React.createRef();

    const addNewMessage = () => {
        dispatch(AddMessageAction());
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(ChangeNewMessageAction(e.currentTarget.value))
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