import React,{useEffect,useState} from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import MoreTitles from './components/MoreTitles/MoreTitles';
import Navbar from './components/Navbar/Navbar';
import axios from './axios';

let link="movie/6346fd19fe46018b5f66d26f";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner url={link}/>
        <Details url={link}/>
        <MoreTitles url={link}/>
        <Footer/>
    </div>
  );
}

export default App;