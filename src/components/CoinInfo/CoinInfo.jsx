import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart, { elements } from 'chart.js/auto';
import Alert from '../Alert/Alert';
// import { data, data } from 'react-router-dom';

function CoinInfo({ historicData, setDays, setInterval, days, curr }) {
  if (!historicData) {
    return <Alert message="No data available" type="info" />;
  }

  const data = {
    labels: historicData.prices.map(coinPrice => {
      const date = new Date(coinPrice[0]);
      let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Price (Past ${days} Days) in ${curr.toUpperCase()}`,
        data: historicData.prices.map(coinPrice => coinPrice[1]),
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      point : {
        radius: 0,
      }
    }
  };

  return (
    <div className="w-full m-10 p-10">
      <Line data={data} options={options} height={500} width={500} />
    </div>
  );
}

export default CoinInfo;
