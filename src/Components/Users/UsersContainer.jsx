import React from 'react';
import Users from './Users';
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers} from './../../redux/users-reduser';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,
    getTotalUsersCount,
    getUsersPage
    } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

        componentDidMount() {

            this.props.getUsers(this.props.currentPage, this.props.pageSize);
            
        }
    
        onPageChanged = (pageNumber) => {

            this.props.getUsers(this.props.pageNumber, this.props.pageSize);
        }
    
        render() {
            // debugger;
            return<>
            {this.props.isFetching ? <Preloader/>  : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            pagesCount={this.props.pagesCount}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            onPageChanged={this.onPageChanged}
                            followingInProgress={this.props.followingInProgress}
                            />
            </>
        }
}

// let mapStateToProps =(state)=>{
//     return{
//         users:state.usersPage.users,
//         pageSize:state.usersPage.pageSize,
//         totalUsersCount:state.usersPage.totalUsersCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching:state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress

//     }
// }

let mapStateToProps = (state) => {
    return{
        // users: getUsersPage(state),
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)

    }
}

// let mapDispatchToProps =(dispatch)=>{
//     return{
//         follow:(userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow:(userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers:(users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount:(totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching:(isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }

//     }
// }

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, 
        { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
) (UsersContainer);



