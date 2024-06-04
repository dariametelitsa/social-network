import './index.css';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import MyContext, { Provider } from "./StoreContext";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<MyContext.Provider value={store}>*/}
            {/*    <App store={store} dispatch={store.dispatch.bind(store)}/>*/}
            {/*</MyContext.Provider>*/}
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)
