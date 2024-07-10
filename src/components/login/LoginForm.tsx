// @flow 
import * as React from 'react';
import style from "./Login.module.scss";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormDataType } from "./Login";

type Props = {
};
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field name={'login'} className={style.input} placeholder={"Enter your login"} component={'input'}/>
            <Field name={'password'} className={style.input} placeholder={"Enter your password"} component={'input'}/>
            <label><Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me</label>
            <button className={style.input}>Login</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    //a unique name for the form
    form: 'login'
}) (LoginForm)