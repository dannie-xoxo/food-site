import React from 'react';
import './App.css';
import NavBar from './components/Nav/navBar';
import Banner from './components/Banner/banner';
import Btn from './components/Menu/btn';
import NavMenu from './components/Menu/navMenu';
import Reviews from './components/Reviews/reviews';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NavMenu/>
      <Btn />
      <Reviews />
    </div>
  );
}

export default App;
