// @flow
import * as React from 'react';
import { Field, reduxForm } from "redux-form";
import style from "components/login/Login.module.scss";
import { FormEventHandler } from "react";
import { Textarea } from "components/common/formsControls/FormsControls";
import { maxLengthCreator, required } from "common/utils/validators/validators";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};

const maxLength100 = maxLengthCreator(50);

const NewMessageForm = (props: Props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessage'} className={style.input} placeholder={"Enter new message"} component={Textarea} type={'textarea'} validate={[maxLength100]}/>
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