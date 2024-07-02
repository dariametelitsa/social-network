// @flow 
import * as React from 'react';
import s from "./Dialogs.module.scss";

type MessageProps = {
    message: string
};
export const Message = ({message}: MessageProps) => {
    return (
        <p className={s.message}>{message}</p>
    );
};