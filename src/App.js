import React from 'react';
import './App.css';

//defining reactdom
var ReactDOM = require('react-dom');

function App() {
  //defining variables
  var listMessages = null;
  var valueCounter = 1;

  //function writes data to localStorage and adds counter to the key to add another instead of overwrite
  function write(){
      localStorage.setItem("myValue" + valueCounter, document.getElementById("chat").value);
      valueCounter++;
  }

  //function reads data from localStorage and displays messages in separate paragraphs
  function read(){
      var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
      while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
      }
      listMessages = values.map((message) =>
        <p>{message}</p>
      );
      ReactDOM.render(listMessages, document.getElementById('localStorageMessages'));
    return values;
  }
    
  return (
    <div className="App">
      <h1>Chat in Local Storage</h1>
      <input type="text" id="chat" class="input" placeholder="Write your message!"></input>
      <button onClick={write}>Send</button><br/><br/>
      <button onClick={read}>Show messages</button><br/>
      <div id ="localStorageMessages">
      </div>
    </div>
  );
}

export default App;