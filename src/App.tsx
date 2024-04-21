import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className="main_wrapper">
                    <Routes>
                        <Route index path={'/dialogs'} element={<Profile/>}/>
                        <Route path={'/profile'} element={<Dialogs/>}/>
                        {/*<Profile/>*/}
                        {/*<Dialogs/>*/}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
