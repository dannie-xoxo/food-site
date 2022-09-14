import React from 'react';
import './App.css';
import NavBar from './components/Nav/navBar';
import Banner from './components/Banner/banner';
import Btn from './components/Menu/btn';
import NavMenu from './components/Menu/navMenu';
import Reviews from './components/Reviews/reviews';
import Blog from './components/Blog/blog';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <NavMenu/>
      <Btn />
      <Reviews />
      <Blog />
    </div>
  );
}

export default App;
