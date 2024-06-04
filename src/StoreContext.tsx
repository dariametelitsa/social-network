import React, { createContext, ReactNode } from "react";
import store, { StoreType } from "./redux/reduxStore";

const MyContext = createContext<StoreType>(store);

type ProviderType = {
    store: StoreType
    children: ReactNode
}
export const Provider = (props: ProviderType) => {
    return <MyContext.Provider value={props.store}>
        {props.children}
    </MyContext.Provider>
}

export default MyContext;
