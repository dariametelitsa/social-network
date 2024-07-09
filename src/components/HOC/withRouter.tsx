import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { PATH } from "../../routes/PATHS";
import { connect } from "react-redux";

type WithRouterType = {
 router:
     {params:
             { userId: number }
     }
}

export const withRouter = <T extends object>(Component: React.ComponentType<T>) => {
    const ComponentWithRouterProp = (props: T & WithRouterType) => {
        const params = useParams();
        //let location = useLocation();
        //let navigate = useNavigate();
        return <Component {...props} router={{ params }} />;
    };
    return ComponentWithRouterProp as React.ComponentType<T & WithRouterType>;
};