import React from "react";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className="">
                <ProfileStatusWithHook />
            </div>
        );
    }
}

export default ProfileStatus;
