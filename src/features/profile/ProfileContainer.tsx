import React from "react";
import { GetUserProfileResponseType } from "../../api/usersAPI";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { Profile } from "./Profile";
import { useParams, } from "react-router-dom";
import { getUserProfileTC } from "../../redux/thunks/usersThunk";
import { withAuthRedirect } from "../../components/HOC/withAuthRedirect";


class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId && this.props.userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfileTC(userId);
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerProps>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.router.params.userId !== this.props.router.params.userId) {
            const userId = this.props.userId;
            if(userId) {
                this.props.getUserProfileTC(userId)
            }
        }
    }

    render() {
        return (
            <Profile
                profile = {this.props.profile}
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
    getUserProfileTC: (id: number) => void;
}
type mapStateToPropsType = {
    profile: GetUserProfileResponseType | null
    userId: number | null
}
const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.id,
    }
}

function withRouter(Component: React.ComponentType<ProfileContainerProps>) {
    function ComponentWithRouterProp(props: any) {
        //let location = useLocation();
        //let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{
                    //location,
                    //navigate,
                    params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getUserProfileTC})(withRouter(withAuthRedirect(ProfileContainer)));