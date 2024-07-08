import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AuthState } from "../../redux/authReducer";
import { StateType } from "../../redux/store";
import { getUserDataTC } from "../../redux/thunks/authThunk";

class HeaderContainer extends React.PureComponent<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getUserDataTC();
    }
    render() {
        return <Header isAuth={!!this.props.auth.id} />
    }
}

type HeaderContainerPropsType = mapDispatchToProps & mapStateToPropsType;

type mapDispatchToProps = {
    getUserDataTC: () => void
}
type mapStateToPropsType = {
    auth: AuthState
}
const mapStateToProps = (state: StateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {getUserDataTC})(HeaderContainer)