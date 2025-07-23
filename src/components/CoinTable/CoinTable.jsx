
import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchCoinData } from "../../services/fetchCoinData";
import store from "../../state/store";
import { useNavigate } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";

function CoinTable() {

  const [page, setPage] = useState(1);
  const { curr } = store();

  const navigate = useNavigate();
  function handleCoinRedirect(coinID) {
    navigate(`/details/${coinID}`);
  }

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['coins', page, curr],
    queryFn: () => fetchCoinData(page, curr),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-full px-2">
      <div className="text-center text-lg md:text-xl font-bold">{curr.toUpperCase()}</div>
      {/* coin heading */}
      <div className="w-full bg-yellow-400 text-black flex flex-col md:flex-row py-2 md:py-4 px-2 font-semibold items-center justify-center text-xs md:text-base">
        <div className="w-full md:basis-[35%] text-center md:text-left">Coin</div>
        <div className="w-full md:basis-[25%] text-center md:text-left">Price</div>
        <div className="w-full md:basis-[20%] text-center md:text-left">24h Change</div>
        <div className="w-full md:basis-[20%] text-center md:text-left">Market Cap</div>
      </div>
      {/* coin data */}
      <div className="flex flex-col w-full">
        {(isLoading) && <PageLoader />}
        {data && data.map((coin) => {
          return (
            <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className="w-full cursor-pointer bg-transparent text-white flex flex-col md:flex-row py-2 md:py-4 px-2 font-semibold items-center justify-between text-xs md:text-base border-b border-gray-700">
              <div className="flex items-center justify-start gap-3 w-full md:basis-[35%] mb-2 md:mb-0">
                <div className="w-12 h-12 md:w-[5rem] md:h-[5rem]">
                  <img src={coin.image} className="w-full h-full" alt={coin.name} />
                </div>
                <div>
                  <div className="text-base md:text-3xl">{coin.name}</div>
                  <div className="text-xs md:text-xl">{coin.symbol}</div>
                </div>
              </div>
              <div className="w-full md:basis-[25%] text-center md:text-left">{coin.current_price}</div>
              <div className="w-full md:basis-[20%] text-center md:text-left">{coin.price_change_24h}</div>
              <div className="w-full md:basis-[20%] text-center md:text-left">{coin.market_cap}</div>
            </div>
          )
        })}
      </div>
      {/* button */}
      <div className="flex gap-4 justify-center items-center w-full">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-wide text-white text-base md:text-2xl rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-secondary btn-wide text-white text-base md:text-2xl rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;