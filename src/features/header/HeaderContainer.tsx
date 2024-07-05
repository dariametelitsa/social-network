import React from "react";
import { Header } from "./Header";
import { authAPI, AuthResponseDataType } from "../../api/authAPI";
import { connect } from "react-redux";
import { AuthState, setUserData } from "../../redux/authReducer";
import { StateType } from "../../redux/store";

class HeaderContainer extends React.PureComponent<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.getUserData()
            .then((res) => {
                if(res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data);
                }
            })
    }

    render() {
        return <Header isAuth={!!this.props.auth.id} />
    }
}

type HeaderContainerPropsType = mapDispatchToProps & mapStateToPropsType;

type mapDispatchToProps = {
    setUserData: (data: AuthResponseDataType) => void
}
type mapStateToPropsType = {
    auth: AuthState
}
const mapStateToProps = (state: StateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)