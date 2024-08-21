import React from 'react';
import './App.css';
import { Navbar } from "features/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./features/dialogs/DialogsContainer";
import store, { DispatchActionTypes, StateType, StoreType } from "redux/store";
import UsersContainer from "./features/users/UsersContainer";
import { PATH } from "common/routes/PATHS";
import ProfileContainer from "./features/profile/ProfileContainer";
import HeaderContainer from "./features/header/HeaderContainer";
import Login from "./components/login/Login";
import { connect } from "react-redux";
import { getUserDataTC, logout } from "redux/thunks/authThunk";
import { compose } from "redux";
import { withRouter } from "components/HOC/withRouter";


class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.getUserDataTC();
    }

    render(): JSX.Element {
        let {store} = this.props;

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar friends={store.getState().sidebar}/>
                <main className="main_wrapper">
                    <Routes>
                        <Route path={`${PATH.PROFILE}/:userId?`} element={<ProfileContainer/>}/>
                        <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
                        <Route path={PATH.USERS} element={<UsersContainer/>}/>
                        <Route path={PATH.LOGIN} element={<Login/>}/>
                    </Routes>
                </main>
            </div>

        );
    }
}

// export default App;
type AppProps = MapDispatchToProps & MapStateToProps

type MapDispatchToProps = {
    getUserDataTC: () => void
}
type MapStateToProps = {
    store: StoreType
    dispatch: (action: DispatchActionTypes) => void
}

const mapStateToProps = (state: StateType) => {
    return {
        store: store
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserDataTC}),
    withRouter
)(App)