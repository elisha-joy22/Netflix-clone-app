import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {Movies} from './components/Movie/Movie';
import Genre from './components/Genre/Genre';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'

function App() {
  let [link,setLink] = useState();
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/"} element={<><Movies link={link} setLink={setLink}/></>}/>
            <Route path={"/movie"} element={<><Genre link={link} setLink={setLink}/></>}/>
            <Route path={"*"} element={<h3>Page not found</h3>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;