import React from 'react';
// import { addPost } from '../../redux/state';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './profile.module.css';

const Profile = (props) => {
console.log('profie check');
    return (
        <div>
            
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
            
        </div>

    )
}

export default Profile;