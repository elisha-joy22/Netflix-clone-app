import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import MoreTitles from './components/MoreTitles/MoreTitles';
import Navbar from './components/Navbar/Navbar';
import axios from './axios';

var link="movie/6346fd19fe46018b5f66d26f";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<><Banner url={link}/><Details url={link}/><MoreTitles url={link}/></>}/>
            <Route path={"*"} element={<h3>Page not found</h3>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;