import React from 'react';
import logo from './logo.svg';
import './App.css';
import { abc, Wajju } from './components/functionCalling/test';
import Example, { } from './components/stateMentVsExpression/Navbar';
import BasicExample from './components/stateMentVsExpression/Navbar';

function App() {
  console.log(abc())
  console.log(Wajju())
  return <div>
    <BasicExample />
  </div>
}

export default App;
