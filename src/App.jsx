import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import CoinTable from './components/CoinTable/CoinTable';
import Banner from './components/Banner/Banner';

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <CoinTable/>
    </>
  )
}

export default App

