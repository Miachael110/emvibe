import React from 'react';
import CaloriesChart from '../components/CaloriesChart';
import ActivityStats from '../components/ActivityStats';
import HabitTracker from '../components/HabitTracker';
import DailyProgress from '../components/DailyProgress';
import MeditationCard from '../components/MeditationCard';
import { dashboardData } from '../data/dashboardData';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
       
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <CaloriesChart data={dashboardData.calories.monthly} />
          </div>
          <div>
            <ActivityStats activity={dashboardData.activity} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <HabitTracker habits={dashboardData.habits} />
          </div>
          <div>
            <DailyProgress progress={dashboardData.dailyProgress} />
          </div>
          <div>
            <MeditationCard meditation={dashboardData.meditation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;