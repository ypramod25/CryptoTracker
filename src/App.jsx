import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import CoinTable from './components/CoinTable/CoinTable';
import Banner from './components/Banner/Banner';

function App() {
  const[curr, setCurr] = useState('usd');
  return (
    <>
      <Navbar setCurr={setCurr}/>
      <Banner/>
      <CoinTable curr={curr}/>
    </>
  )
}

export default App

