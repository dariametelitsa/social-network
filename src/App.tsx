import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { stateType } from "./redux/state";


type AppProps = {
    state: stateType
}

function App({state}: AppProps): JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={state.sidebar}/>
                <main className="main_wrapper">
                    <Routes>
                        <Route path={'/profile'} element={<Profile posts={state.profilePage.posts} />} />
                        <Route path={'/dialogs'} element={<Dialogs
                            dialogsData={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}/>} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
