import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './friends.module.css'



const FriendsItem = (props) => {

    return (
        <div className={s.friend}>
            {props.name}
            <img src={props.img} alt="logo"/>
        </div>
    )
}

export default FriendsItem;