import React from 'react';
import profileReducer from '../../redux/profile-reducer';
// import { addPost } from '../../redux/state';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducers';
import {connect} from "react-redux";
import * as axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
                debugger;
            });

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        )
    }
}

let mapStateToProps = (state)=> {
    return{
        profile: state.ProfilePage.profile
    }
    
}




export default connect(mapStateToProps, {setUserProfile} )(ProfileContainer);


