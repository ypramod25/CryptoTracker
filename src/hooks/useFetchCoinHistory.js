import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistoricData } from '../services/fetchCoinHistoricData';
import store from '../state/store';

function useCoinFetchCoinHistroy (coinId) {
    const {curr} = store(); 
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');

    const {data:historicData, isLoading, isError} = useQuery({
    queryKey: ['coinHistoricData', coinId, curr, days],
    queryFn: () => fetchCoinHistoricData(coinId, curr, '', days),
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
  })

  return [
    historicData,
    isLoading,
    isError,
    days,
    setDays,
    setCoinInterval
  ]
}

export default useCoinFetchCoinHistroy;