import React, { useState } from 'react';
import './App.css';

const App = () => {
  // "todos" name of our state
  // "setTodos" method we use to update state
  // use const [] for array destructuring
  /* 
  ** useState is the hook to access lifecycle methods
  ** what we pass into the param is the default state 
  ** of the first param in array
  */
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet for networking" },
    { text: "Build react hook todo app" }
  ]);



}

export default App;
