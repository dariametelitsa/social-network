import React from 'react';
import MyContext from "../../StoreContext";
import { Navbar } from "./Navbar";
import { StateType } from "../../redux/reduxStore";

export const NavbarContainer = () => {
    return (
        <MyContext.Consumer>
            {(store) => {
                const state: StateType = store.getState();
                    return (<Navbar friends={state.sidebar}/>)
                }}
                </MyContext.Consumer>
    )
            };
