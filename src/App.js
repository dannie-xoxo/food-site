import React from 'react';
import './App.css';
import NavBar from './components/Nav/navBar';
import Banner from './components/Banner/banner';
import NavMenu from './components/Menu/navMenu';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NavMenu />
    </div>
  );
}

export default App;
