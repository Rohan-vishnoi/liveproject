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
    return(
        <form>
            <input value = {inputText} onChange={inputTextHandler} type="text" className="friend-input" />
            <button onClick={submitfriendHandler} className="friend-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
            {/* <div className="select">
                <select name="friends" className="filter-friend">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div> */}
            </form>
    );

};

export default Form;