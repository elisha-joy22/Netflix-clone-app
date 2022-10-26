import React from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import MoreTitles from './components/MoreTitles/MoreTitles';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Details/>
        <MoreTitles/>
        <Footer/>
    </div>
  );
}

export default App;