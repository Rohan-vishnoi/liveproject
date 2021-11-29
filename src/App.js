import React, {useState} from 'react';
import './App.css';
//IMporting Componenets
import Form from './components/Form';
import FriendList from './components/FriendList';
function App() {
  const [inputText, setInputText] = useState("");
  const [friends, setfriends] = useState([]);
  return (
    <div className="App">
      <header>
     <h1>Friends List</h1>
     </header>
     <Form friends={friends} inputText={inputText} setfriends={setfriends} setInputText={setInputText} status={status} setStatus={setStatus} />
     <FriendList friends={friends} setfriends={setfriends} />
    </div>
  );
}

export default App;
