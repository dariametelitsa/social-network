import React from "react";
import { GetUserProfileResponseType, userApi } from "../../api/usersAPI";
import { connect } from "react-redux";
import { StateType } from "../../redux/store";
import { setUserProfile } from "../../redux/profileReducer";
import { Profile } from "./Profile";
import { useParams, } from "react-router-dom";

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }
        userApi.getUserProfile(userId)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerProps>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.router.params.userId !== this.props.router.params.userId) {
            const userId = 2;
            userApi.getUserProfile(userId)
                .then(res => {
                    this.props.setUserProfile(res.data)
                })
        }
    }

    render() {
        return (
            <Profile
                profile = {this.props.profile}
                router={this.props.router}
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

type ProfileContainerProps = mapDispatchToProps & mapStateToPropsType & { router: {params: { userId: number }} }

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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));