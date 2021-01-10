import React from 'react';
import { connect } from 'react-redux';
import {updateNewPostTextCreator, addPostCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {

//     // let state = props.store.getState();

//     return (
//         <StoreContext.Consumer>
//             { (store) =>{
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostCreator());
//                     } 
            
//                 let onPostChange = (text) => {
            
//                     let action = updateNewPostTextCreator(text);
//                     store.dispatch(action);
//                 }

//                 return <MyPosts updateNewPostText={onPostChange} 
//                 addPost={addPost} 
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}/>
//             }
            
//             }
//         </StoreContext.Consumer>
//     )
// }


let mapStateToProps =(state)=>{
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        addPost: () =>{
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) =>{
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;