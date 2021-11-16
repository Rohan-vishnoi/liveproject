import React from "react";

const Friend = ({text , temp, friends,setfriends}) => {

    const  deletehundler = () => {
        setfriends(friends.filter(el => 
            el.id !== temp.id));
    };
    const favroitehandler = () => {
        setfriends(friends.map(item=> {
            if(item.id === temp.id)
            {
                return {
                    ...item , favourite : !item.favourite,
                };
            }
            console.log(item);
            return item;
        }))
    };
    return(
        <div className="friend">
            <li className={`friend-item  ${ temp.favourite ? "completed" : ""}`}>{text}</li>
            <button onClick={favroitehandler } className={"complete-btn"}><i className="fas fa-star"></i></button>
            <button onClick={deletehundler} className="trash-btn"><i className="fa fa-trash"></i></button>
        </div>

    );
}


export default Friend;