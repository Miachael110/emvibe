import React from 'react';
import { dashboardData } from '../data/dashboardData';

const CaloriesChart = () => {
  const data = dashboardData.calories.monthly;
  const maxValue = Math.max(...data.map(item => item.value));
  const maxIndex = data.findIndex(item => item.value === maxValue);

  const maxPixelHeight = 200; // adjust for tallest bar size

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Calories</h2>
        <select className="text-sm text-gray-500 bg-transparent border-none outline-none">
          <option>Month</option>
        </select>
      </div>

      <div className="flex items-end gap-3">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * maxPixelHeight;
          return (
            <div key={item.month} className="flex flex-col items-center flex-1">
              <div
                className={`w-full rounded-t-lg ${
                  index === maxIndex ? 'bg-[#D6D0FD]' : 'bg-[#FEECBA]'
                }`}
                style={{
                  height: `${height}px`,
                  minHeight: '20px'
                }}
              />
              <span className="text-xs text-gray-500 mt-2">{item.month}</span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>0</span>
        <span>{Math.round(maxValue * 0.25)}</span>
        <span>{Math.round(maxValue * 0.5)}</span>
        <span>{Math.round(maxValue * 0.75)}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default CaloriesChart;
