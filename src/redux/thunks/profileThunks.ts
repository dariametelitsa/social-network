// getUserStatus

import { ThunkActionType } from "../store";
import { toggleFollowingUser } from "../usersReducer";
import { profileAPI } from "../../api/profileAPI";
import { setUserProfile, setUserStatus } from "../profileReducer";

export const getUserProfileTC = (userId: number): ThunkActionType => (dispatch) => {
    dispatch(toggleFollowingUser(userId, true));
    profileAPI.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res));
        })
        .catch(e => {
            console.log(e.message)
        })
}

export const getUserStatusTC = (userId: number): ThunkActionType => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data));
        })
        .catch(e => {
            console.log(e.message);
        })
}

export const updateUserStatusTC = (status: string): ThunkActionType => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
        .catch(e => {
            console.log(e.message);
        })
}