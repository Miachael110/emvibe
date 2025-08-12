export const dashboardData = {
  user: {
    name: "Miley",
    dateRange: "May 05 - May 18",
    timeframe: "24h"
  },
  calories: {
    monthly: [
      { month: "Jan", value: 1000 },
      { month: "Feb", value: 800 },
      { month: "Mar", value: 1400 },
      { month: "Apr", value: 1200 },
      { month: "May", value: 700 },
      { month: "Jun", value: 1300 },
      { month: "Jul", value: 1400 },
      { month: "Sep", value: 2000 },
      { month: "Aug", value: 1000 },
      { month: "Oct", value: 1300 },
      { month: "Nov", value: 800 },
      { month: "Dec", value: 1100 }
    ]
  },
  activity: {
    heartRate: { value: 130, unit: "bpm", label: "Heart rate" },
    totalSteps: { value: 5500, label: "Total steps" },
    kcalBurn: { value: 505, unit: "kCal", label: "Kcal burn" },
    move: 75,
    exercise: 60,
    steps: 85
  },
  habits: [
    {
      id: 1,
      icon: "🏃",
      title: "Morning run",
      time: "07:00 am",
      location: "Park",
      duration: "45min",
      completed: true
    },
    {
      id: 2,
      icon: "💧",
      title: "1.5L of water daily",
      time: "All day",
      location: "Park",
      completed: true
    },
    {
      id: 3,
      icon: "🍳",
      title: "Cooking mealpreps for 3 days",
      time: "11:00 am",
      location: "Home",
      duration: "2h",
      completed: true
    }
  ],
  dailyProgress: 85,
  meditation: {
    title: "Meditation",
    subtitle: "Good vibes, good life",
    duration: "positive thinking | 27min"
  }
};