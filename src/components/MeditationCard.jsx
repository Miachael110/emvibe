import React from 'react';

const MeditationCard = ({ meditation }) => (
  <div className="bg-[#D6D0FD] rounded-2xl p-6 shadow-sm relative overflow-hidden">
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{meditation.title}</h2>
        <button className="text-gray-600">⋯</button>
      </div>
      
      <div className="mb-16">
        <p className="text-gray-800 font-medium mb-1">{meditation.subtitle}</p>
        <p className="text-sm text-gray-600">{meditation.duration}</p>
      </div>
    </div>
    
    <div className="absolute bottom-4 right-4">
      <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center">
          <span className="text-2xl">🧘‍♂️</span>
        </div>
      </div>
    </div>
    
    <div className="absolute top-4 right-8 w-2 h-2 bg-purple-300 rounded-full"></div>
    <div className="absolute top-8 right-4 w-1 h-1 bg-purple-300 rounded-full"></div>
    <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
  </div>
);

export default MeditationCard;