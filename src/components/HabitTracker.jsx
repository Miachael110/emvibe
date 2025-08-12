import React from 'react';
import { Clock, MapPin, Timer } from 'lucide-react';

const HabitTracker = () => {
  const habits = [
    {
      id: 1,
      title: "Morning run",
      time: "07:00 am",
      location: "Park",
      duration: "45min",
      completed: true,
      icon: "🏃",
      bgColor: "bg-[#FEECBA]"
    },
    {
      id: 2,
      title: "1.5L of water daily",
      time: "All day",
      location: "Park",
      duration: null,
      completed: true,
      icon: "💧",
      bgColor: "bg-[#D6D0FD]"
    },
    {
      id: 3,
      title: "Cooking mealpreps for 3 days",
      time: "11:00 am",
      location: "Home",
      duration: "2h",
      completed: true,
      icon: "👨‍🍳",
      bgColor: "bg-[#202125]"
    }
  ];

  return (
    <div className="w-full max-w-lg mx-auto" style={{ backgroundColor: '#F8F8FC' }}>
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold text-gray-900">Habit tracker</h2>
          <div className="flex gap-6">
            <button className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1">
              Habits
            </button>
            <button className="text-sm font-medium text-gray-400">
              Tasks
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {habits.map((habit) => (
            <div key={habit.id} className="flex items-center gap-4">
              {/* Icon container */}
              <div className={`w-16 h-16 rounded-2xl ${habit.bgColor} flex items-center justify-center`}>
                <span className="text-2xl">{habit.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{habit.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{habit.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{habit.location}</span>
                  </div>
                  {habit.duration && (
                    <div className="flex items-center gap-1">
                      <Timer className="w-4 h-4" />
                      <span>{habit.duration}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Checkbox */}
              <div className="w-6 h-6 rounded border-2 bg-purple-100 border-purple-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HabitTracker;