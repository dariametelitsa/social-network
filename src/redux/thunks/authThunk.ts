import { ThunkActionType } from "../store";
import { authAPI } from "../../api/authAPI";
import { setUserData } from "../authReducer";

export const getUserDataTC = () :ThunkActionType => (dispatch) => {
    authAPI.me()
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data));
            }
        })
        .catch(e => {
            console.log(e.message)
        })
}