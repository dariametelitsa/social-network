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
                <label><input type={"checkbox"}/> remember me</label>
                <button className={style.input}>Log in</button>
            </div>
        </div>
    );
};

export default Login;