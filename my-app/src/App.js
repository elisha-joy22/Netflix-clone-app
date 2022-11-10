import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import MoreTitles from './components/MoreTitles/MoreTitles';
import Navbar from './components/Navbar/Navbar';
import axios from './axios';
import One from './components/Movie/One';
import Movies from './components/Movie/Movie';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<><Movies/></>}/>
            <Route path={"*"} element={<h3>Page not found</h3>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;