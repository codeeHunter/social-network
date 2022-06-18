import {connect} from "react-redux";
import React from "react";
import {
    follow,
    requestUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    unfollow
} from "../../Redux/usersReducer";
import Users from './Users'
import {compose} from "redux";
import {
    getCurrentPage,
    getfollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selector";
import s from './users.module.css'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageNumber)
    }

    render() {
        return <div className={""}>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getfollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            setTotalUsersCount,
            toggleFollowingProgress,
            requestUsers,
        })
)(UsersContainer)

