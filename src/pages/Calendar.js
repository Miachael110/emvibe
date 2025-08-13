import React, { useState } from "react";
import { Plus, ChevronDown, Minus, Clock, Bell, BookOpen } from "lucide-react";

const Calendar = () => {
  const [selectedWeek, setSelectedWeek] = useState("May 05 - May 9");
  const [timerValue, setTimerValue] = useState(30);
  const [selectedActivity, setSelectedActivity] = useState("Cardio dance");

  const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];
  const days = [
    { id: "05", day: "Mon", date: "05" },
    { id: "06", day: "Tue", date: "06" },
    { id: "07", day: "Thu", date: "07" },
    { id: "08", day: "Wed", date: "08" },
    { id: "09", day: "Fri", date: "09" },
  ];

      const events = {
      "05": [
        {
          time: "8:00 AM",
          title: "Morning run",
          location: "Park",
          duration: "1h",
          color: "bg-[#FEECBA]",
          participants: 3,
        },
      ],
      "06": [
        {
          time: "9:00 AM",
          title: "English",
          location: "Zoom",
          duration: "1h",
          color: "bg-[#EFECFE]",
          participants: 2,
        },
      ],
      "07": [
        {
          time: "8:00 AM",
          title: "Cardio dance",
          duration: "30 min",
          color: "bg-[#FEECBA]",
        },
        {
          time: "10:00 AM",
          title: "Presentation",
          location: "Office",
          duration: "45 min",
          color: "bg-[#FEECBA]",
        },
        {
          time: "11:00 AM",
          title: "Coffee break",
          duration: "30 min",
          color: "bg-[#EFECFE]",
        },
      ],
      "08": [
        {
          time: "10:00 AM",
          title: "SMM Meeting",
          location: "Zoom",
          duration: "1h",
          color: "bg-[#EFECFE]",
          participants: 2,
        },
      ],
      "09": [
        {
          time: "8:00 AM",
          title: "Meditation",
          duration: "30 min",
          color: "bg-[#EFECFE]",
        },
        {
          time: "9:00 AM",
          title: "Morning run",
          location: "Park",
          duration: "1h",
          color: "bg-[#FEECBA]",
          participants: 3,
        },
      ],
    };

  const getEventsForTimeAndDay = (time, dayId) => {
    return events[dayId]?.filter((event) => event.time === time) || [];
  };

  const renderParticipantAvatars = (count) => {
    const avatars = [];
    for (let i = 0; i < Math.min(count, 3); i++) {
      avatars.push(
        <div
          key={i}
          className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"
        ></div>
      );
    }
    if (count > 3) {
      avatars.push(
        <div
          key="more"
          className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-xs text-white"
        >
          +{count - 3}
        </div>
      );
    }
    return avatars;
  };

  return (
    <div className="p-6 space-y-6 bg-[#F5F5FC] min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">Calendar</p>
          <h1 className="text-3xl font-bold text-[#202125]">
            Building better habits
          </h1>
        </div>
        <button className="bg-white hover:bg-white/90 text-[#202125] px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-gray-300">
          <Plus size={16} />
          Add new task
        </button>
      </div>

        <div className="flex flex-col lg:flex-row gap-4">
        {/* Calendar Section */}
        <div className="bg-[#F8F8FC] rounded-xl p-6 shadow-sm w-full lg:w-3/4 overflow-x-auto">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="bg-[#D6D0FD] px-4 py-2 rounded-lg">
              <span className="text-white font-medium">May 07 - 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <select 
                value={selectedWeek} 
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-[#202125]"
              >
                <option>May 05 - May 9</option>
                <option>May 12 - May 16</option>
                <option>May 19 - May 23</option>
              </select>
              <ChevronDown size={16} className="text-[#202125]" />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-6 gap-4">
            {/* Time Column */}
            <div className="space-y-4">
              <div className="h-12 flex items-center text-sm text-gray-500 font-medium">
                GMT+8
              </div>
              {timeSlots.map((time, index) => (
                <div
                  key={time}
                  className="h-20 flex items-center text-sm text-gray-600 font-medium"
                >
                  {time}
                  {index === 1 && (
                    <div className="ml-2 w-full h-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Day Columns */}
            {days.map((day) => (
              <div key={day.id} className="space-y-4">
                                  <div
                    className={`h-12 flex items-center justify-center text-sm font-medium rounded-lg ${
                      day.id === "07"
                        ? "bg-[#EFECFE] text-[#202125]"
                        : "text-gray-600"
                    }`}
                  >
                    {day.date} {day.day}
                  </div>
                {timeSlots.map((time) => {
                  const dayEvents = getEventsForTimeAndDay(time, day.id);
                  return (
                    <div key={time} className="h-20 relative">
                      {dayEvents.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={`${event.color} p-2 rounded-lg text-xs text-gray-800 mb-1`}
                        >
                          <div className="font-medium">{event.title}</div>
                          {event.location && (
                            <div className="text-gray-600">
                              {event.location}
                            </div>
                          )}
                          <div className="text-gray-600">{event.duration}</div>
                          {event.participants && (
                            <div className="flex items-center gap-1 mt-1">
                              {renderParticipantAvatars(event.participants)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar Widgets */}
                <div className="flex flex-col gap-6">
          {/* Timer Focus Widget */}
          <div className="bg-[#F8F8FC] rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#202125]">
                Timer focus
              </h3>
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-2 py-1 bg-white text-[#202125]"
              >
                <option>Cardio dance</option>
                <option>Morning run</option>
                <option>Meditation</option>
              </select>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <button 
                onClick={() => setTimerValue(Math.max(0, timerValue - 5))}
                className="w-8 h-8 bg-[#FEECBA] rounded-full flex items-center justify-center hover:bg-[#FEECBA]/80 transition-colors"
              >
                <Minus size={16} className="text-[#202125]" />
              </button>
              <div className="text-4xl font-bold text-[#202125]">
                {String(Math.floor(timerValue / 60)).padStart(2, "0")}:
                {String(timerValue % 60).padStart(2, "0")}
              </div>
              <button 
                onClick={() => setTimerValue(timerValue + 5)}
                className="w-8 h-8 bg-[#202125] rounded-full flex items-center justify-center hover:bg-[#202125]/80 transition-colors"
              >
                <Plus size={16} className="text-white" />
              </button>
            </div>
            
            <button className="w-full bg-[#D6D0FD] hover:bg-[#D6D0FD]/80 text-black py-2 rounded-lg transition-colors">
              Start timer
            </button>
          </div>

                    {/* Reminder Widget */}
          <div className="bg-[#F8F8FC] rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#202125]">Reminder</h3>
              <button className="text-[#202125] hover:text-[#202125]/80">
                <div className="w-1 h-1 bg-[#202125] rounded-full"></div>
                <div className="w-1 h-1 bg-[#202125] rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-[#202125] rounded-full mt-1"></div>
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FEECBA] rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell size={24} className="text-[#202125]" />
              </div>
              <p className="text-[#202125] text-sm">
                Don't forget to take your pills. Stay healthy!
              </p>
            </div>
          </div>

                    {/* Habits Promotion Widget */}
          <div className="bg-[#D6D0FD] rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">
              The nine habits to increase your energy
            </h3>
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#EFECFE] to-[#FEECBA] rounded-lg flex items-center justify-center">
                <BookOpen size={24} className="text-black" />
              </div>
            </div>
            
            <button className="w-full bg-white hover:bg-white/90 text-black py-2 rounded-lg transition-colors border border-[#D6D0FD]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
