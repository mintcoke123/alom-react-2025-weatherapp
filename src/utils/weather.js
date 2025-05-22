import { weatherCodes, daysKor, dayNumber, units } from "../constants/constants";
export const getWeatherDescription = (code) => {
  const weatherDescription = weatherCodes[code] || "알 수 없음";
  return weatherDescription;
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  const hourlyTime = weatherData.hourly.time.slice(dayNumber.firstDay, dayNumber.lastDay);
  const hourlyTemperature = weatherData.hourly.temperature_2m.slice(dayNumber.firstDay, dayNumber.lastDay);
  const hourlyWeatherCode = weatherData.hourly.weather_code.slice(dayNumber.firstDay, dayNumber.lastDay);
  const hourlyData = hourlyTime.map((time, index) => ({
    time: new Date(time).getHours() + units.hour,
    temp: hourlyTemperature[index],
    weatherCode: hourlyWeatherCode[index],
  }));
  return hourlyData;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];

  const dailyTime = weatherData.daily.time;
  const dailyWeatherCode = weatherData.daily.weather_code;
  const dailyTempMax = weatherData.daily.temperature_2m_max;


  return dailyTime.map((dateStr, index) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = daysKor[date.getDay()];

    return {
      date: `${month}${units.month} ${day}${units.day} (${weekday})`,
      weatherCode: dailyWeatherCode[index],
      maxTemp: dailyTempMax[index],
    };
  });
};


