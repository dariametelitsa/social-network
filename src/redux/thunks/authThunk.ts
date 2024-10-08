import { ThunkActionType } from "../store";
import { authAPI } from "api/authAPI";
import { setUserData } from "../authReducer";
import { FormDataType } from "features/login/Login";
import { stopSubmit } from "redux-form";

export const getUserDataTC = ():ThunkActionType<Promise<void>> => async (dispatch) => {
    try {
        const res = await authAPI.me();
        if (res.data.resultCode === 0) {
            dispatch(setUserData({...res.data.data, isAuth: true}));
        }
    } catch (error) {
        console.log('Some error occurred');
    }
}

export const login = (data: FormDataType):ThunkActionType => async (dispatch) => {
    try {
        const res = await authAPI.login(data);
        if(res.data.resultCode === 0) {
            dispatch(getUserDataTC());
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error occurred'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
    catch (error) {
        console.log('Some error occurred');
    }
}

export const logout = ():ThunkActionType => async (dispatch) => {
    try {
        const res = await authAPI.logout();
        if(res.data.resultCode === 0) {
            dispatch(setUserData({email: null, login: null, id: null, isAuth: false}));
        }
    }
    catch (error) {
        console.log('Some error occurred');
    }
}