import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";
import { dayNumber } from "../constants/constants";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  const currentTemp = weatherData.hourly.temperature_2m[dayNumber.firstDay];
  const currentWeatherCode = weatherData.daily.weather_code[dayNumber.firstDay];

  return (
    <CurrentWeatherWrapper>
      <Temperature>{currentTemp}°C</Temperature>
      <WeatherCode>{getWeatherDescription(currentWeatherCode)}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
