import React from "react";
import { Suspense } from "react";
//import Preloader from "components/common/preloader/Preloader";


export const withSuspense = <T extends object>(Component: React.ComponentType<T>) => {
    const ComponentWithRouterProp = (props: T): JSX.Element => {
        return (<Suspense fallback={<h2>Loading...</h2>} >
            <Component {...props}/>;
        </Suspense>)
    };
    return ComponentWithRouterProp as React.ComponentType<T>;
};
