import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart, { elements } from 'chart.js/auto';
import Alert from '../Alert/Alert';
import { chartDays } from '../../helpers/constants';
// import { data, data } from 'react-router-dom';

function CoinInfo({ historicData, setDays, setInterval, days, curr }) {

  function handleDayChange(e) {
    const daysSelected = (e.target.options[e.target.selectedIndex].value);
    if(daysSelected == 1) {
      setInterval?.('');
    } else {
      setInterval?.('daily');
    }
    setDays?.(daysSelected);
  }

  if (!historicData) {
    return <Alert message="No data available" type="info" />;
  }

  const data = {
    labels: historicData.prices.map(coinPrice => {
      const date = new Date(coinPrice[0]);
      let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
      return days == 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Price (Past ${days} ${(days == 1)? "Day" : "Days"}) in ${curr.toUpperCase()}`,
        data: historicData.prices.map(coinPrice => coinPrice[1]),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point : {
        radius: 0,
      }
    }
  };

  return (
    <div className="w-full h-[500px] p-5">
      <Line data={data} options={options} className="h-[500px] w-full" />

      <div className="flex justify-center mt-4"> 
        {/* // Dropdown for selecting days */}
        <select className="p-2 bg-gray-800 text-white rounded" onChange={handleDayChange}>
          {chartDays.map((day, index) => (
            <option selected={days == day.value} key={index} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default CoinInfo;