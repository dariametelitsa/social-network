import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { stateType } from "./redux/state";


type AppProps = {
    state: stateType
    dispatch: (action: any) => void
}

function App({state, dispatch}: AppProps): JSX.Element {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.sidebar}/>
            <main className="main_wrapper">
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs
                        dialogsData={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}/>}/>
                </Routes>
            </main>
        </div>

    );
}

export default App;
