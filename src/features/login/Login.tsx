// @flow
import * as React from 'react';
import style from 'features/login/Login.module.scss'
import { LoginReduxForm } from "features/login/LoginForm";
import { connect } from "react-redux";
import { login } from "redux/thunks/authThunk";
import { Navigate } from "react-router-dom";
import { StateType } from "redux/store";


const Login = ({isAuth, login}: Login) => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
        login(formData);
    }

    if(isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={style.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapDispatchToProps = {
    login: (data: FormDataType) => void
}

type MapStateToProps = {
    isAuth: boolean
}

type Login = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);