import React from "react";
import FriendsList from "./FrindsList/FriendsList";

const Friends = (props) => {
    const FriendsListComponent = props.state.ListFriendsInfo.map(
        e =>
            <FriendsList image={e.image} name={e.name} status={e.status}/>)
    return (
        <div>
            {FriendsListComponent}
        </div>
    )
}

export default Friends;