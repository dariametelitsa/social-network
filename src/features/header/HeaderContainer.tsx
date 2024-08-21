import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AuthState } from "redux/authReducer";
import { StateType } from "redux/store";
import { getUserDataTC, logout } from "redux/thunks/authThunk";

class HeaderContainer extends React.PureComponent<HeaderContainerPropsType> {
    render() {
        return <Header login={this.props.auth.login} isAuth={!!this.props.auth.id} logout={this.props.logout} />
    }
}

type HeaderContainerPropsType = mapDispatchToProps & mapStateToPropsType;

type mapDispatchToProps = {
    logout: () => void
}
type mapStateToPropsType = {
    auth: AuthState
}
const mapStateToProps = (state: StateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)