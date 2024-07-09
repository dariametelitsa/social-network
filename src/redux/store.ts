import { applyMiddleware, combineReducers, createStore, EmptyObject, Store } from "redux";
import profileReducer, { ProfileActionType } from "./profileReducer";
import dialogsReducer, { DialogActionType } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, { UserActionType } from "./usersReducer";
import { AuthActionsType, authReducer } from "./authReducer";
import thunk, { ThunkAction } from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export type StateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export type StoreType = Store<EmptyObject & StateType>

export type DispatchActionTypes = UserActionType | ProfileActionType | DialogActionType | AuthActionsType
export type ThunkActionType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, DispatchActionTypes>

export default store;