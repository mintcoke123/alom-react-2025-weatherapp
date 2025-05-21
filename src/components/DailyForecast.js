import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (
    <DailyForecastWrapper>
      {dailyData.map((day) => (
        <DailyItem key={day.date}>
          <div>{day.date}</div>
          <div>{getWeatherDescription(day.weatherCode)}</div>
          <div>{day.maxTemp}°C</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
