// @flow
import * as React from 'react';
import style from './Login.module.scss'

type Props = {};
const Login = (props: Props) => {
    return (
        <div className={style.loginBlock}>
            <div className={style.loginForm}>
                <input className={style.input} type={"text"} placeholder={'Enter your login'}/>
                <input className={style.input} type={"text"} placeholder={'Enter your password'}/>
                <button className={style.input}>Log in</button>
            </div>
        </div>
    );
};

export default Login;