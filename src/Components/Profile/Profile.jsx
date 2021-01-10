import React from 'react';
// import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfiliInfo';
import s from './profile.module.css';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>

    )
}

export default Profile;