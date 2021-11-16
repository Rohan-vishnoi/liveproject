import React from "react";

const Friend = ({text , temp, friends,setfriends}) => {

    const  deletehundler = () => {
        setfriends(friends.filter(el => 
            el.id !== temp.id));
    };
    return(
        <div className="friend">
            <li className='friend-item'>{text}</li>
            <button className="complete-btn" ><i className="fas fa-star"></i></button>
            <button onClick={deletehundler} className="trash-btn"><i className="fa fa-trash"></i></button>
        </div>

    );
}


export default Friend;