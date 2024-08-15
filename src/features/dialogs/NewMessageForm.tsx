// @flow
import * as React from 'react';
import { Field, reduxForm } from "redux-form";
import style from "components/login/Login.module.scss";
import { FormEventHandler } from "react";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};
const NewMessageForm = (props: Props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessage'} className={style.input} placeholder={"Enter new message"} component={'textarea'}/>
            <button>Add message</button>
        </form>
    );
};

export const NewMessageFormRedux = reduxForm<NewMessageFormType>({
    form: 'newMessage'
})(NewMessageForm)


export type NewMessageFormType = {
    newMessage: string
}