import { combineReducers, createStore, EmptyObject, Store } from "redux";
import profileReducer, { ProfileActionType } from "./profileReducer";
import dialogsReducer, { DialogActionType } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, { UserActionType } from "./usersReducer";
import { AuthActionsType, authReducer } from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export type StateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export type StoreType = Store<EmptyObject & StateType>

export type DispatchActionTypes = UserActionType | ProfileActionType | DialogActionType | AuthActionsType

export default store;