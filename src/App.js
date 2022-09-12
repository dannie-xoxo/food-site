import React from 'react';
import './App.css';
import NavBar from './components/Nav/navBar';
import Banner from './components/Banner/banner';
import NavMenu from './components/Menu/navMenu';
import Btn from './components/Menu/btn';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Btn />
    </div>
  );
}

export default App;
