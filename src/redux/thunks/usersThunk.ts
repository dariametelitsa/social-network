import { ThunkActionType } from "../store";
import { userApi } from "../../api/usersAPI";
import {
    followUser, setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingUser,
    unfollowUser
} from "../usersReducer";
import { setUserProfile } from "../profileReducer";

export const getUsersTC = (currentPage: number, pageSize: number, extended?: boolean): ThunkActionType => (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage));
    userApi.getUsers(currentPage, pageSize)
        .then(res => {
            if(extended) {
                dispatch(setUsers(res.items, true))
            } else {
                dispatch(setUsers(res.items));
            }
            dispatch(setTotalUsersCount(res.totalCount));
        })
        .catch(() => {
            dispatch(setUsers([]));
        })
        .finally(() => {
            dispatch(setIsFetching(false))
        })
}

export const unfollowUserTC = (userId: number): ThunkActionType => (dispatch) => {
    dispatch(toggleFollowingUser(userId, true));
    userApi.unsubscribe(userId)
        .then(() => {
            dispatch(unfollowUser(userId));
        })
        .finally(() => {
            dispatch(toggleFollowingUser(userId, false));
        })
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

export const getUserProfileTC = (userId: number): ThunkActionType => (dispatch) => {
    dispatch(toggleFollowingUser(userId, true));
    userApi.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res));
        })
        .catch(e => {
            console.log(e.message)
        })
}