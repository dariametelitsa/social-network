// @flow
import * as React from 'react';
import style from './Login.module.scss'
import { LoginReduxForm } from "./LoginForm";


const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={style.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export default Login;