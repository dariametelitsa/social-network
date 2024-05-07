// @flow 
import * as React from 'react';
import s from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

type DialogItemProps = {
    name: string
    id: string
};
export const DialogItem = ({name, id}: DialogItemProps) => {
    const path = '/dialogs/' + id;
    return (
        <li className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
};