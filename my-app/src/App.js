import React from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import MoreTitles from './components/MoreTitles/MoreTitles';
import Navbar from './components/Navbar/Navbar';

let link="movie/6346fd19fe46018b5f66d26f"

function App() {
  return (
    <div className="App">
        <Navbar/>

        <MoreTitles url={link}/>
        <Footer/>
    </div>
  );
}

export default App;