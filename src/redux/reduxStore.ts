import { combineReducers, createStore, EmptyObject, Store } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer});

export type StateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export type StoreType = Store<EmptyObject & StateType>

export default store;