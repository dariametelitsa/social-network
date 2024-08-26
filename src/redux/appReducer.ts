import { ThunkActionType } from "redux/store";
import { getUserDataTC } from "redux/thunks/authThunk";

export type AppState = {
    isInitialized: boolean
}
const initialState: AppState = {
    isInitialized: false,
}

export const appReducer = (state = initialState, action: AppActionsType): AppState => {
    switch (action.type) {
        case "samurai-network/app/SET_INITIALIZING": {
            return {...state, isInitialized: true};
        }
        default: {
            return state;
        }
    }
}

export const setInitializing = () => ({type: "samurai-network/app/SET_INITIALIZING" } as const);
export type AppActionsType =
    | ReturnType<typeof setInitializing>

export const initializeApp = (): ThunkActionType => (dispatch) => {
    dispatch(getUserDataTC())
        .then(() => {
            dispatch(setInitializing());
        })
}

