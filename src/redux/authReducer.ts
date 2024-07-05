import { AuthResponseDataType } from "../api/authAPI";

export type AuthState = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
}
const initialState: AuthState = {
    id: null,
    login: null,
    email: null,
    isFetching: true
}

export const authReducer = (state = initialState, action: AuthActionsType): AuthState => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data, isFetching: false}
        }
        default: {
            return state;
        }
    }
}

export const setUserData = (data: AuthResponseDataType) => ({type: "SET_USER_DATA", data } as const);
export type AuthActionsType =
    | ReturnType<typeof setUserData>