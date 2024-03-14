import React from 'react';
import './App.css';
import { abc, Wajju } from './components/functionCalling/test';
import BasicExample from './components/Navbar/Navbar';
import MNavbar from './components/Navbar/Navbar';
import MediaCard from './components/Cards/Cards';
import { Curosal } from './components/curosal/Curosal';

function App() {
  console.log(abc())
  console.log(Wajju())
  return <div>
    <MNavbar />
    <Curosal/>
    <MediaCard/>
    
  </div>
}

export default App;
