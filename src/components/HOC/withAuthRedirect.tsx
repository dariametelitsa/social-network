// @flow 
import * as React from 'react';
import { Navigate } from "react-router-dom";
import { PATH } from "../../routes/PATHS";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";

type Props = {
    Component: React.ComponentType<any>
};

const mapStateToPropsForRedirect = (state: StateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth,
    }
}
type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

// export const withAuthRedirect = <T extends ExtendedProps>(Component: React.ComponentType<T>) => {
//     return class RedirectComponent extends React.Component<ExtendedProps & T> {
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
// };

export const withAuthRedirect = <T extends object>(Component: React.ComponentType<T>) => {
    const RedirectComponent: React.FC<mapStateToPropsForRedirectType> = (props) => {
        if (!props.isAuth) {
            return <Navigate to={PATH.LOGIN} />;
        }
        return <Component {...props as T} />;
    };
    const ConnectedAuthRedirectComp = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComp;
};