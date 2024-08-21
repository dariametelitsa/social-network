// @flow 
import * as React from 'react';
import style from "./Login.module.scss";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormDataType } from "./Login";
import { FormEventHandler } from "react";
import { required } from "common/utils/validators/validators";
import { FormControl } from "components/common/formsControls/FormsControls";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field name={'email'} className={style.input} placeholder={"Enter your login"} component={FormControl} tag={'input'} validate={[required]}/>
            <Field name={'password'} className={style.input} placeholder={"Enter your password"} component={FormControl} validate={[required]} type={'password'}/>
            <label>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
                remember me
            </label>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <button className={style.input}>Login</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    //a unique name for the form
    form: 'login'
}) (LoginForm)