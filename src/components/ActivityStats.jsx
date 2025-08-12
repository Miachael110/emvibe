import React from 'react';
import { Heart, Activity, Zap } from 'lucide-react';

const ActivityStats = ({ activity }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
      <select className="text-sm text-gray-500 bg-transparent border-none outline-none">
        <option>Week</option>
      </select>
    </div>
    
    <div className="flex justify-between mb-7">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{activity.heartRate.label}</p>
          <p className="text-lg font-semibold">{activity.heartRate.value} {activity.heartRate.unit}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{activity.totalSteps.label}</p>
          <p className="text-lg font-semibold">{activity.totalSteps.value}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
          <Zap className="w-5 h-5 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{activity.kcalBurn.label}</p>
          <p className="text-lg font-semibold">{activity.kcalBurn.value} {activity.kcalBurn.unit}</p>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Move</span>
          <span>{activity.move}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-400 h-2 rounded-full" style={{width: `${activity.move}%`}}></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Exercise</span>
          <span>{activity.exercise}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{width: `${activity.exercise}%`}}></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Steps</span>
          <span>{activity.steps}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gray-800 h-2 rounded-full" style={{width: `${activity.steps}%`}}></div>
        </div>
      </div>
    </div>
  </div>
);

export default ActivityStats;