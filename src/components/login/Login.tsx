// @flow
import * as React from 'react';
import style from './Login.module.scss'
import { LoginReduxForm } from "./LoginForm";

type Props = {};
const Login = (props: Props) => {
    return (
        <div className={style.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    );
};

export default Login;