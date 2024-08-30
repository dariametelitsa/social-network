import React from "react";
import { GetUserProfileResponseType, PhotosType } from "api/usersAPI";
import { connect } from "react-redux";
import { StateType } from "redux/store";
import { Profile } from "./Profile";
import { withAuthRedirect } from "components/HOC/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "components/HOC/withRouter";
import { getUserProfileTC, getUserStatusTC, saveAvatar, updateUserStatusTC } from "redux/thunks/profileThunks";
import DialogsContainer from "features/dialogs/DialogsContainer";


class ProfileContainer extends React.Component<ProfileContainerProps> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId && this.props.userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerProps>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.router.params.userId !== this.props.router.params.userId) {
            const userId = this.props.userId;
            if(userId) {
                this.props.getUserProfileTC(userId);
            }
        }
    }
    render() {

        console.log(this.props.profile?.photos.small)
        return (
            <Profile
                isOwner={this.props.userId === this.props.profile?.userId}
                profile = {this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateUserStatusTC}
                saveAvatar={this.props.saveAvatar}
                // router={this.props.router}
            />
        );
    }
}

// const ProfileContainer = ({profile, setUserProfile} : ProfileContainerProps) => {
//     useEffect(() => {
//         userApi.getUserProfile(2)
//             .then(res => {
//                 setUserProfile(res.data)
//             })
//     }, []);
//     return (<Profile profile = {profile} />)
// }

type ProfileContainerProps = mapDispatchToPropsType & mapStateToPropsType & { router: {params: { userId: number }} }

type mapDispatchToPropsType = {
    getUserProfileTC: (id: number) => void
    getUserStatusTC: (id: number) => void
    updateUserStatusTC: (status: string) => Promise<void>
    saveAvatar: (photo: File) => void
}

type mapStateToPropsType = {
    profile: GetUserProfileResponseType | null
    userId: number | null
    status: string
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    console.log(state.profilePage.profile?.photos.small)
    return {
        profile: state.profilePage.profile,
        userId: state.auth.id,
        status: state.profilePage.status,
    }
}

 // export default connect(mapStateToProps, {getUserProfileTC})(withRouter(withAuthRedirect(ProfileContainer)));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC, saveAvatar}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
