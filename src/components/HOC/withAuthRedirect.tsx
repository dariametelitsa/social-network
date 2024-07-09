// @flow 
import * as React from 'react';
import { Navigate } from "react-router-dom";
import { PATH } from "../../routes/PATHS";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";

const mapStateToPropsForRedirect = (state: StateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth,
    }
}
type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

//class component
// export const withAuthRedirect = <T extends object>(Component: React.ComponentType<T>) => {
//     class RedirectComponent extends React.Component<mapStateToPropsForRedirectType> {
//             render() {
//                 const {isAuth, ...props} = this.props;
//                 console.log(isAuth);
//                 if(!isAuth) {
//                     console.log('here');
//                     return <Navigate to={PATH.LOGIN}/>
//                 }
//                 return <Component {...props as T}/>
//             }
//         }
//     return connect(mapStateToPropsForRedirect)(RedirectComponent);
// };

export const withAuthRedirect = <T extends object>(Component: React.ComponentType<T>) => {
    const RedirectComponent: React.FC<mapStateToPropsForRedirectType> = (props) => {
        if (!props.isAuth) {
            return <Navigate to={PATH.LOGIN} />;
        }
        return <Component {...props as T} />;
    };
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};