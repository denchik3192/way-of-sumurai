import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const addNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>

            <Field component="textarea" name ="newPostText" placeholder="new post"/>
            
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}
const ReduxPostForm = reduxForm ({form: "addPostMessageForm"}) (addNewPostForm)

const MyPosts = (props) => {
    
    let postsElements = 
    props.posts.map(post => <Post message={post.message} LikesCount={post.likesCount} />);

    // let newPostElement = React.createRef();

    let addNewPostMessage = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <ReduxPostForm onSubmit={addNewPostMessage}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;