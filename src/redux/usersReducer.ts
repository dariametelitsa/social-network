import { UserType } from "../api/usersAPI";
import { UsersPageType } from "../types/types";

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users}) as const;
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const;
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET_TOTAL_USER_COUNT', totalUsersCount}) as const;

export type userActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

const initialState: UsersPageType = {
    users: [] as UserType[],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
};

const usersReducer = (state: UsersPageType = initialState, action: userActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case "SET_USERS": {
            return {...state, users: [...action.users]};
            // return {...state, users: [...action.users, ...state.users]};
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT": {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        default:
            return state;
    }
}

export default usersReducer;

