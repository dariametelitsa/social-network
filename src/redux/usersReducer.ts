import { usersPageType } from "./store-example";
import { UserType } from "../api/usersAPI";

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const;
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const;
export const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users}) as const;

type followAType = ReturnType<typeof followAC>
type unfollowAType = ReturnType<typeof unfollowAC>
type setUsersAType = ReturnType<typeof setUsersAC>
export type userActionType =
    followAType
    | unfollowAType
    | setUsersAType

const initialState: usersPageType = {
    users: [],
};

const usersReducer = (state: usersPageType = initialState, action: userActionType): usersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return  {...state, users: state.users.map(u => {
                return u.id === action.userId ? {...u, followed: true} : u})}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u})}
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export default usersReducer;

