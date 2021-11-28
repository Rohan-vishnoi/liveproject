import React from "react";

const Form = ({setInputText, setfriends , friends , inputText ,  .}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitfriendHandler = (e) => {
        e.preventDefault();
        setfriends([...friends,{text : inputText , favourite: false, id: Math.random() * 1000}])
        setInputText("");
    }
    const statusHandler = (e) => {
        console.log(e.);
    }
   
    return(
        <form>
            <input placeholder="Enter your friends name" value = {inputText} onChange={inputTextHandler} type="text" className="friend-input" />
            <button onClick={submitfriendHandler} className="friend-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
            <button onClick={statusHandler} type="submit" className="friend-button">
                <i className="fas fa-sort"></i>
            </button>
          
            </form>
    );

};

export default Form;