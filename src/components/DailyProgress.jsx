import React from 'react';

const DailyProgress = ({ progress }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Daily progress</h2>
      
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#D6D0FD"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{progress}%</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 text-center">
        Keep working on your nutrition<br />and sleep
      </p>
    </div>
  );
};

export default DailyProgress;