import React from "react";
import Friend from "./Friend"
const FriendList = ({setfriends,friends}) => {
   
    return (
        <div className="friend-container">
            <ul className="friend-list">

            {friends.map((temp) => (
                <Friend key={temp.id} temp={temp} friends={friends} setfriends={setfriends} text={temp.text} id={temp.id}/>
            ))}
             
            </ul>
        </div>
    )
}


export default FriendList;