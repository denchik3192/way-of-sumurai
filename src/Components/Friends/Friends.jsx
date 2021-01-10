import React from 'react';
import FriendsItem from "./FriendsItem/FriendsItem";
const Friends = (props) => {

    let friendsElements = 
    props.state.friends.map(friend => <FriendsItem name={friend.name} id={friend.id} img={friend.img}/>);
    return (
            <div>
                {friendsElements}
            </div>
    )
}

export default Friends;
