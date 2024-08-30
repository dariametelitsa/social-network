import { ThunkActionType } from "../store";
import { toggleFollowingUser } from "../usersReducer";
import { profileAPI } from "api/profileAPI";
import { saveAvatarSuccess, setUserProfile, setUserStatus } from "../profileReducer";
import axios, { AxiosError } from "axios";

export const getUserProfileTC = (userId: number): ThunkActionType => async (dispatch) => {
    dispatch(toggleFollowingUser(userId, true));
    try {
        const res = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(res));
    } catch (e: unknown){
        if (axios.isAxiosError(e)) {
            console.log(e.message);
        } else {
            console.log((e as Error).message);
        }
    }
}

export const getUserStatusTC = (userId: number): ThunkActionType => async (dispatch) => {
    try {
        const res = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(res.data));
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            console.log(e.message);
        } else {
            console.log((e as Error).message);
        }
    }
}

export const updateUserStatusTC = (status: string): ThunkActionType<Promise<void>> => async dispatch => {
    try {
        const res = await profileAPI.updateUserStatus(status);
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (e: unknown) {
         if (axios.isAxiosError(e)) {
             console.log(e.message);
         } else {
             console.log((e as Error).message);
         }
    }
}

export const saveAvatar = (photo: File): ThunkActionType => async (dispatch) => {
    try {
        const res = await profileAPI.saveAvatar(photo);
        if (res.data.resultCode === 0) {
            dispatch(saveAvatarSuccess(res.data.data.photos));
        }
    }
    catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            console.log(e.message);
        } else {
            console.log((e as Error).message);
        }
    }
}
