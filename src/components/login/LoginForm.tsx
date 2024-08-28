// @flow 
import * as React from 'react';
import style from "./Login.module.scss";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormDataType } from "./Login";
import { FormEventHandler } from "react";
import { required } from "common/utils/validators/validators";
import { createField, FormControl } from "components/common/formsControls/FormsControls";

type Props = {
    handleSubmit: FormEventHandler<HTMLFormElement>
};
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit} className={style.loginForm}>
            {createField('email', "Enter your login", [required], FormControl)}
            {/*<Field name={'email'} className={style.input} placeholder={"Enter your login"} component={FormControl} tag={'input'} validate={[]}/>*/}
            <Field name={'password'} className={style.input} placeholder={"Enter your password"} component={FormControl} validate={[required]} type={'password'}/>
            <label>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
                remember me
            </label>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <button className={style.input}>Login</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    //a unique name for the form
    form: 'login'
}) (LoginForm)