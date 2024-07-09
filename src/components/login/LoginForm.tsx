// @flow 
import * as React from 'react';
import style from "./Login.module.scss";
import { Field, reduxForm } from "redux-form";

type Props = {
    
};
const LoginForm = (props: Props) => {
    return (
        <form className={style.loginForm}>
            <Field name={'login'} className={style.input} placeholder={"Enter your login"} component={'input'}/>
            <Field name={'password'} className={style.input} placeholder={"Enter your password"} component={'input'}/>

            <label><Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me</label>
            {/*<input className={style.input} type={"text"} placeholder={'Enter your login'}/>*/}
            {/*<input className={style.input} type={"text"} placeholder={'Enter your password'}/>*/}
            {/*<label><input type={"checkbox"}/> remember me</label>*/}
            <button className={style.input}>Login</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    //a unique name for the form
    form: 'login'
}) (LoginForm)