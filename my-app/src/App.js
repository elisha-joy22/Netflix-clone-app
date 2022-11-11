import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {Movies} from './components/Movie/Movie';
import Genre from './components/Genre/Genre';

function App() {

  return (
    <div className="App">
      {console.log("App")}
      <Router>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<><Movies/></>}/>
            <Route path={"/movie"} element={<><Genre/></>}/>
            <Route path={"*"} element={<h3>Page not found</h3>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;