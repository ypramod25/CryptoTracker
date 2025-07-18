import React from 'react';
import './App.css'
import Home from './pages/Home';
import { CurrencyContext } from './context/CurrencyContext';
import { useState } from 'react';

function App() {
  const [curr, setCurr] = useState('usd');
  return (
    <>
      <CurrencyContext.Provider value={{ curr, setCurr}}>
        <Home />
      </CurrencyContext.Provider>
    </>
  )
}

export default App;

