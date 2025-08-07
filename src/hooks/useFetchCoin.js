import { useQuery } from '@tanstack/react-query';
import { fetchCoinDetails } from '../services/fetchCoinDetails';    
import { useParams } from 'react-router-dom';
import store from '../state/store';

function useCoinFetchCoin (coinId) {
    
    const { data : coin, isLoading, error } = useQuery({
        queryKey: ['coinDetails', coinId],
        queryFn: () => fetchCoinDetails(coinId),
        catcheTime: 1000 * 60 * 2, // Cache for 2 minutes
        staleTime: 1000 * 60 * 2,
    });
    return [
        coin, isLoading, error
    ]

}

export default useCoinFetchCoin;