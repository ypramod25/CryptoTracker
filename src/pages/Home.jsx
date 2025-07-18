import Navbar from "../components/Navbar/Navbar";
import CoinTable from "../components/CoinTable/CoinTable";
import Banner from "../components/Banner/Banner";
import React from 'react';

function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <CoinTable/>
    </>
  );
}

export default Home;