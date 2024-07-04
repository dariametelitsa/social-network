import React from "react";
import { GetUserProfileResponseType, userApi } from "../../api/usersAPI";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setUserProfile } from "../../redux/profileReducer";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        userApi.getUserProfile(2)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile
                profile = {this.props.profile}
                ///{...this.props}
            />
        );
    }
}
type ProfileContainerProps = mapDispatchToProps & mapStateToPropsType
type mapDispatchToProps = {
    setUserProfile: (profile: GetUserProfileResponseType) => void;
}
type mapStateToPropsType = {
    profile: GetUserProfileResponseType | null
}
const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);