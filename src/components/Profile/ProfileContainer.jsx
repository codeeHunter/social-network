import React from "react";
import { connect } from "react-redux";
import { getStatus, getUsersProfile, savePhoto, updateStatus } from "../../Redux/profileReducer";
import Profile from "./Profile";
import s from "./Profile.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.router.params.user_Id;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                console.log(this.props);
            }
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.user_Id !== prevProps.router.params.user_Id) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile
                    {...this.props}
                    isOwner={!this.props.router.params.user_Id}
                    profile={this.props.state}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    isAuth={this.props.isAuth}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state.profilePage,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    withRouter,
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto })
)(ProfileContainer);
