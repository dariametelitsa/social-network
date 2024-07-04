import { UserType } from "../api/usersAPI";
import { UsersPageType } from "../types/types";

export const followUser = (userId: number) => ({type: 'FOLLOW_USER', userId}) as const;
export const unfollowUser = (userId: number) => ({type: 'UNFOLLOW_USER', userId}) as const;
export const setUsers = (users: UserType[], extended: boolean = false) => ({type: 'SET_USERS', users, extended}) as const;
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const;
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USER_COUNT', totalUsersCount}) as const;
export const setIsFetching = (isFetching: boolean) => ({type: 'SET_IS_FETCHING', isFetching}) as const;

export type userActionType =
    | ReturnType<typeof followUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>

const initialState: UsersPageType = {
    users: [] as UserType[],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state: UsersPageType = initialState, action: userActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW_USER': {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case "UNFOLLOW_USER": {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case "SET_USERS": {
            if(action.extended) {
                return {...state, users: [...state.users, ...action.users]};
            }
            return {...state, users: [...action.users]};
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT": {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case "SET_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export default usersReducer;

