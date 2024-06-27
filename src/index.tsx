import './index.css';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
// store.subscribe(rerenderEntireTree)
