// @flow
import * as React from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";

type Props = {};

type dialogType = {
    id: string
    name: string
}

const dialogsData: dialogType[] = [
    {id: '1', name: 'Tom'},
    {id: '2', name: 'Steve'},
    {id: '3', name: 'Veronica'},
    {id: '4', name: 'Nataniel'},
    {id: '5', name: 'Mike'},
    {id: '6', name: 'Aurora'},
]

export const Dialogs = (props: Props) => {
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