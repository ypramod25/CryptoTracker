import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchCoinData } from "../../services/fetchCoinData";
import { CurrencyContext } from "../../context/CurrencyContext";

function CoinTable() {
  const [page, setPage] = useState(1);
  const valueObject = React.useContext(CurrencyContext);
  const curr = valueObject.curr;
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['coins', page, curr],
    queryFn: () => fetchCoinData(page, curr),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2, // how long the data is considered fresh in cache
  });

  if (isError) return <div>Error: {error.message}</div>;

  return (
      <div className="my-5 flex flex-col item-center justify-center gap-5 w-[80vw] mx-auto">
        <div className="text-center">{(curr.toUpperCase())}</div>
          {/* coin heading */}
          <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold item-center justify-center">
              <div className="basis-[35%]">Coin</div>
              <div className="basis-[25%]">Price</div>
              <div className="basis-[20%]">24h Change</div>
              <div className="basis-[20%]">Market Cap</div>
          </div>
          {/* coin data */}
          <div className="flex flex-col w-[80vw] mx-auto">
              {(isLoading) && <div>Loading...</div>}
              {data && data.map((coin) => {
                  return (
                      <div key = {coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                        <div className="flex items-center justify-start gap-3 basis-[35%]">
                            <div className="w-[5rem] h-[5rem]">
                              <img src={coin.image} className="w-full h-full"/>
                            </div>
                            <div>
                              <div className="text-3xl">{coin.name}</div>
                              <div className="text-xl">{coin.symbol}</div>
                            </div>

                        </div>

                        <div className="basis-[25%]">
                          {coin.current_price}
                        </div>

                        <div className="basis-[20%]">
                          {coin.price_change_24h}
                        </div>

                        <div className="basis-[20%]">
                          {coin.market_cap}
                        </div>

                      </div>
                  )
              })}

          </div>
          {/* button */}
          <div className="flex gap-4 justify-center items-center">

            <button 
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn btn-primary btn-wide text-white text-2xl rounded"
            >
            Prev
            </button>
            <button 
              onClick={() => setPage(page + 1)}
              className="btn btn-secondary btn-wide text-white text-2xl rounded"
              >
              Next
            </button>

          </div>

      </div>
  );
}

export default CoinTable;
