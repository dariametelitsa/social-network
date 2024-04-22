// @flow 
import * as React from 'react';
import s from './Dialogs.module.scss';

type Props = {
    
};
export const Dialogs = (props: Props) => {
    return (
        <div className={s.dialogs}>
                <ul className={s.dialogsItems}>
                    <li className={s.dialog + ' ' + s.active}>Tom</li>
                    <li className={s.dialog}>Steve</li>
                    <li className={s.dialog}>Veronica</li>
                    <li className={s.dialog}>Nataniel</li>
                    <li className={s.dialog}>Mike</li>
                    <li className={s.dialog}>Aurora</li>
                </ul>
                <ul className={s.messagesItems}>
                    <li className={s.message}>Hey!</li>
                    <li className={s.message}>How are you?</li>
                    <li className={s.message}>Do you want to go to the concert with me?</li>
                </ul>
        </div>
    );
};