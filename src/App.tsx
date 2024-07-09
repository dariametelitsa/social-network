import React from 'react';
import './App.css';
import { Navbar } from "./features/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./features/dialogs/DialogsContainer";
import { DispatchActionTypes, StoreType } from "./redux/store";
import UsersContainer from "./features/users/UsersContainer";
import { PATH } from "./routes/PATHS";
import ProfileContainer from "./features/profile/ProfileContainer";
import HeaderContainer from "./features/header/HeaderContainer";
import Login from "./components/login/Login";


type AppProps = {
    store: StoreType //StoreType
    dispatch: (action: DispatchActionTypes) => void
}

function App({store}: AppProps): JSX.Element {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar friends={store.getState().sidebar}/>
            <main className="main_wrapper">
                <Routes>
                    <Route path={`${PATH.PROFILE}/:userId?`} element={<ProfileContainer/>}/>
                    <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
                    <Route path={PATH.USERS} element={<UsersContainer/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                </Routes>
            </main>
        </div>

    );
}

export default App;
