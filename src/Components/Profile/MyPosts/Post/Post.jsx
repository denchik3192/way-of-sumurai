import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://sun9-76.userapi.com/c5100/u120281127/a_7768e20b.jpg?ava=1" alt="pic" />
                { props.message }
            <div>
                <span>Like</span> {props.LikesCount}
            </div>
        </div>


    )
}

export default Post;