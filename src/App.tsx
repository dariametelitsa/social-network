import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";

function App(): JSX.Element {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main className="main">
                {/*<Profile/>*/}
                <Dialogs/>
            </main>
        </div>
    );
}

export default App;
