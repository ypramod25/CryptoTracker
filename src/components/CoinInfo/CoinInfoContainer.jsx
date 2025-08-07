import CoinInfo from "./CoinInfo";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import store from "../../state/store";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useCoinFetchCoinHistroy from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer({coinId}) {

  const [historicData, isLoading, isError, days, setDays, setCoinInterval] = useCoinFetchCoinHistroy(coinId);

  if(isLoading) {
    return <PageLoader />;
  }

  if(isError) {
    return <Alert message="Error fetching data" type="warning"/>;
  }
  
  return (
    <div>
      <CoinInfo 
      historicData={historicData} 
      setDays={setDays} 
      setCoinInterval={setCoinInterval}
      days={days}
      curr={curr} />
    </div>
  );
}

export default CoinInfoContainer;