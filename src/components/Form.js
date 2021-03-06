import React from "react";

const Form = ({setInputText, setfriends , friends , inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitfriendHandler = (e) => {
        e.preventDefault();
        if(inputText !== "")
        {
        setfriends([...friends,{text : inputText , favourite: false, id: Math.random() * 1000}])
        setInputText("");
        }
    }

   
    return(
        <form>
            <input placeholder="Enter your friends name" value = {inputText} onChange={inputTextHandler} type="text" className="friend-input" />
            <button onClick={submitfriendHandler} className="friend-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
            <button  type="submit" className="friend-button">
                <i className="fas fa-sort"></i>
            </button>
          
            </form>
    );

};

export default Form;