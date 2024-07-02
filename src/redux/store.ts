import { combineReducers, createStore, EmptyObject, Store } from "redux";
import profileReducer, { profileActionType } from "./profileReducer";
import dialogsReducer, { dialogActionType } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, { userActionType } from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer
});

export type StateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export type StoreType = Store<EmptyObject & StateType>

export type DispatchActionTypes = userActionType | profileActionType | dialogActionType

export default store;