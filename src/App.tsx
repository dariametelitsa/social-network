import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { dialogType, PostsProps } from "./index";


type AppProps = {
    posts: PostsProps[]
    dialogsData: dialogType[]
}

function App({posts, dialogsData}: AppProps): JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className="main_wrapper">
                    <Routes>
                        {/*<Route path={'/profile'} element={<Profile/>}/>*/}
                        {/*<Route path={'/dialogs'} element={<Dialogs/>}/>*/}
                        <Route path={'/profile'} element={<Profile posts={posts} />} />
                        <Route path={'/dialogs'} element={<Dialogs dialogsData={dialogsData}/>} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
