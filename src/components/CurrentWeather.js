import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  const currentTemp = weatherData.hourly.temperature_2m[0];
  const currentWeatherCode = weatherData.daily.weather_code[0];

  return (
    <CurrentWeatherWrapper>
      <Temperature>{currentTemp}°C</Temperature>
      <WeatherCode>{getWeatherDescription(currentWeatherCode)}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
