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
import { compose } from "redux";
import { withRouter } from "components/HOC/withRouter";
import { initializeApp } from "redux/appReducer";
import Preloader from "components/common/preloader/Preloader";
import { myFriendsType } from "redux/store-example";


class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render(): JSX.Element {

        if(!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar friends={this.props.sidebar}/>
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
    initializeApp: () => void
}
type MapStateToProps = {
    isInitialized: boolean
    sidebar: myFriendsType[]
}

const mapStateToProps = (state: StateType) => {
    return {
        isInitialized: state.app.isInitialized,
        sidebar: state.sidebar
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);