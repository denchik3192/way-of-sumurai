import { render } from '@testing-library/react';
import React, { Component, PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { TextArea } from '../../Common/FormsControls/FormsControl';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const  maxLength10 = maxLengthCreator(10  );

const addNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>

            <Field component={TextArea} name ="newPostText" placeholder="new post" 
            validate={[required, maxLength10]}/>
            
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}
const ReduxPostForm = reduxForm ({form: "addPostMessageForm"}) (addNewPostForm)

const MyPosts  = React.memo(props => {

    // shouldComponentUpdate (nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state;
    // }
    
    console.log("render posts"); 
    
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
});



export default MyPosts;