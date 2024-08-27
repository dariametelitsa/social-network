import { ThunkActionType } from "../store";
import { userApi } from "api/usersAPI";
import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingUser,
    unfollowUser
} from "../usersReducer";
import axios from "axios";

export const fetchUsers = (currentPage: number, pageSize: number, extended?: boolean): ThunkActionType => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    try {
        const res = await userApi.getUsers(currentPage, pageSize);
        if(extended) {
            dispatch(setUsers(res.items, true))
        } else {
            dispatch(setUsers(res.items));
        }
        dispatch(setTotalUsersCount(res.totalCount));
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            console.log(e.message);
        } else {
            console.log((e as Error).message);
        }
    } finally {
        dispatch(setIsFetching(false))
    }
}

export const unfollowUserTC = (userId: number): ThunkActionType => async (dispatch) => {
    dispatch(toggleFollowingUser(userId, true));
    try {
        const res = await userApi.unsubscribe(userId);
        if(res.data.resultCode === 0) {
            dispatch(unfollowUser(userId));
        }
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            console.log(e.message);
        } else {
            console.log((e as Error).message);
        }
    } finally {
        dispatch(toggleFollowingUser(userId, false));
    }
}

export const followUserTC = (userId: number): ThunkActionType => (dispatch) => {
    dispatch(toggleFollowingUser(userId, true));
    userApi.subscribe(userId)
        .then(() => {
            dispatch(followUser(userId));
        })
        .finally(() => {
            dispatch(toggleFollowingUser(userId, false));
        })
}
