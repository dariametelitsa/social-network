// @flow 
import * as React from 'react';
import s from './Dialogs.module.scss';
import { NavLink } from "react-router-dom";
import { Dialog } from "./Dialog";
import { Message } from "./Message";

type Props = {
    
};

type namesType = {
    id: string
    name: string
}

const names: namesType[] = [
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
                    {names.map(name => (<Dialog key={name.id} name={name.name} id={name.id}/>))}
                </ul>
                <div className={s.messagesItems}>
                    <Message message={'Hey'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'Do you want to go to the concert with me?'}/>
                </div>
        </div>
    );
};