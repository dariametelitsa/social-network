import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./components/dialogs/DialogsContainer";
import { DispatchActionTypes } from "./redux/store";
import { StoreType } from "./redux/reduxStore";
import { NavbarContainer } from "./components/navbar/NavbarContainer";


// type AppProps = {
//     store: StoreType //StoreType
//     dispatch: (action: DispatchActionTypes) => void
// }

function App(): JSX.Element {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer />
            <main className="main_wrapper">
                <Routes>
                    <Route path={'/profile'} element={<Profile />}/>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                </Routes>
            </main>
        </div>

    );
}

export default App;
