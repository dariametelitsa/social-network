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
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function App({state, addPost, updateNewPostText}: AppProps): JSX.Element {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.sidebar}/>
            <main className="main_wrapper">
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs
                        dialogsData={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}/>}/>
                </Routes>
            </main>
        </div>

    );
}

export default App;
