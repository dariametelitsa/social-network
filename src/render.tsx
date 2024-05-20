import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { addPost, stateType, updateNewPostText } from "./redux/state";


export const rerenderEntireTree = (props: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={props} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


