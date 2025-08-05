import CoinInfo from "./CoinInfo";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import store from "../../state/store";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";

function CoinInfoContainer({coinId}) {

  const {curr} = store(); 
  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState('');

  const {data:historicData, isLoading, isError} = useQuery({
    queryKey: ['coinHistoricData', coinId, curr, days],
    queryFn: () => fetchCoinHistoricData(coinId, curr, '', days),
    cacheTime: 1000 * 60 * 2, // 1 hour
    staleTime: 1000 * 60 * 2, // 5 minutes

  })

  if(isLoading) {
    return <PageLoader />;
  }

  if(isError) {
    return <Alert message="Error fetching data" type={'error'} />;
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