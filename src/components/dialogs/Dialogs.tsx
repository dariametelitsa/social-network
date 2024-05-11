// @flow
import * as React from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { dialogType, messageType } from "../../redux/state";

type DialogsProps = {
    dialogsData: dialogType[]
    messages: messageType[]
}

export const Dialogs = ({dialogsData, messages}: DialogsProps) => {
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
        </div>
    );
};