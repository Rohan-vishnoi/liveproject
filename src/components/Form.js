import React from "react";

const Form = ({setInputText, setfriends , friends , inputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitfriendHandler = (e) => {
        e.preventDefault();
        setfriends([...friends,{text : inputText , favourite: false, id: Math.random() * 1000}])
        setInputText("");
    }
    const Sortfavstudents = (e) => {
        let arr1 = [];
        let arr2 = [];
        let arr5 = [];
       friends.forEach(element => {
           if(element.favourite)
           {
               arr1.push(element);
           } else if(!element.favourite)
           {
               arr2.push(element);
           }
       });

       arr5 = arr1.concat(arr2);
       friends =  [];
       friends = arr5;
    }
    return(
        <form>
            <input placeholder="Enter your freind's name" value = {inputText} onChange={inputTextHandler} type="text" className="friend-input" />
            <button onClick={submitfriendHandler} className="friend-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
            <button onClick={Sortfavstudents} type="submit" className="friend-button">
                <i className="fas fa-sort"></i>
            </button>
          
            </form>
    );

};

export default Form;