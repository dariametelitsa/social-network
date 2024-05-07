// @flow
import * as React from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { dialogType } from "../../index";

type DialogsProps = {
    dialogsData: dialogType[]
}

export const Dialogs = ({dialogsData}: DialogsProps) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsData.map(name => (<DialogItem key={name.id} name={name.name} id={name.id}/>))}
            </ul>
            <div className={s.messagesItems}>
                <Message message={'Hey'}/>
                <Message message={'How are you?'}/>
                <Message message={'Do you want to go to the concert with me?'}/>
            </div>
        </div>
    );
};