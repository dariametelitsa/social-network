import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";

function App(): JSX.Element {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;
