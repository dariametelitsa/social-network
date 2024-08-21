import { ThunkActionType } from "../store";
import { authAPI } from "api/authAPI";
import { setUserData } from "../authReducer";
import { FormDataType } from "components/login/Login";

export const getUserDataTC = ():ThunkActionType => (dispatch) => {
    authAPI.me()
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(setUserData({...res.data.data, isAuth: true}));
            }
        })
        .catch(e => {
            console.log(e.message)
        })
}

export const login = (data: FormDataType):ThunkActionType => async (dispatch) => {
    try {
        const res = await authAPI.login(data);
        if(res.data.resultCode === 0) {
            dispatch(getUserDataTC());
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