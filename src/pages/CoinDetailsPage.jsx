import React, { use, useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import store from '../state/store';
function CoinDetailsPage() {
    const {coinId} = useParams(); // Assuming you are using react-router to get the coin ID
    const { data : coin, isLoading, error } = useQuery({
        queryKey: ['coinDetails', coinId],
        queryFn: () => fetchCoinDetails(coinId),
        catcheTime: 1000 * 60 * 2, // Cache for 2 minutes
        staleTime: 1000 * 60 * 2,
        });
    const {curr} = store();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
        <hr />
        <div className="flex flex-col md:flex-row">

            <div
                className="md:w-1/3 w-full flex flex-col items-center justify-center mt-6 md:mt-0 border-r-2  border-gray-500"
            >
                <img 
                src={coin?.image?.large} alt={coin?.name} className="h-52 mb-5" />
                <h1 className="text-2xl font-bold mb-2">{coin?.name}</h1>
                <p className="text-white-600 mb-4">{coin?.description?.en}</p>

                <div
                    className="w-full flex flex-col md:flex-row md:justify-around"
                >
                    <div 
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2 className="text-xl font-bold ">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_cap_rank}
                        </span>
                    </div>

                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl text-yellow-400 font-bold ">
                            Current Price
                        </h2>
                        <h2> ({curr.toUpperCase()})</h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_data.current_price[curr]}
                        </span>
                    </div>

                </div>

            </div>

            <div
            className="text-2xl text-center w-full">
                Coin Information
            </div>

            
        </div>
        </>
    );
}   

export default CoinDetailsPage;