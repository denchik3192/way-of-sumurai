import React from 'react';
import Profile from './Profile';
import  {getUserProfile}  from '../../redux/profile-reducer';
import {connect} from "react-redux";
import * as axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import { usersAPI } from '../../API/API';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {

        // debugger;
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=2;
        }
// debugger;
        this.props.getUserProfile(userId);
        // // usersAPI.getProfile(userId).then(response => {
        // //         this.props.setUserProfile(response.data);
            
        //     });

    }

    render() {
        
        return (

                <Profile {...this.props} profile={this.props.profile}/>

        )
    }
}

let mapStateToProps = (state)=> {
    return{
        profile: state.profilePage.profile,
        
    }
    
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect

)(ProfileContainer);




