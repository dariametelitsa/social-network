import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./components/dialogs/DialogsContainer";
import { DispatchActionTypes } from "./redux/store";


type AppProps = {
    store: any //StoreType
    dispatch: (action: DispatchActionTypes) => void
}

function App({store}: AppProps): JSX.Element {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={store.getState().sidebar}/>
            <main className="main_wrapper">
                <Routes>
                    <Route path={'/profile'} element={<Profile store={store}/>}/>
                    <Route path={'/dialogs'} element={<DialogsContainer store={store}/>}/>
                </Routes>
            </main>
        </div>

    );
}

export default App;
