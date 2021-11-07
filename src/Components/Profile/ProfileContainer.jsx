import React from "react";
import Profile from "./Profile";
import {
  getUserProfile,
  updateStatus,
  getStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    // debugger;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if(!userId){
        // this.props.history.push("/login");//toDo fix errror
      }
      // userId=14675
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshots){
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => {
  // console.log('mstp profile');
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
