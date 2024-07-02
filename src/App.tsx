import React from 'react';
import './App.css';
import { Header } from "./features/header/Header";
import { Navbar } from "./features/navbar/Navbar";
import { Profile } from "./features/profile/Profile";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./features/dialogs/DialogsContainer";
import { DispatchActionTypes, StoreType } from "./redux/store";
import { UsersContainer } from "./features/users/UsersContainer";


type AppProps = {
    store: StoreType //StoreType
    dispatch: (action: DispatchActionTypes) => void
}

function App({store}: AppProps): JSX.Element {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={store.getState().sidebar}/>
            <main className="main_wrapper">
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                </Routes>
            </main>
        </div>

    );
}

export default App;
