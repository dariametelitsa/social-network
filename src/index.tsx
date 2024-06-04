import './index.css';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)
