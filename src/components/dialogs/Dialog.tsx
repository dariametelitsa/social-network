// @flow 
import * as React from 'react';
import s from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

type DialogProps = {
    name: string
    id: string
};
export const Dialog = ({name, id}: DialogProps) => {
    const path = '/dialogs/' + id;
    return (
        <li className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
};