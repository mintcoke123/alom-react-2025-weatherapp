import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";
import { units } from "../constants/constants";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((hour) => (
        <HourlyItem key={hour.time}>
          <div style={{ marginBottom: "20px" }}>{hour.time}</div>
          <div>{getWeatherDescription(hour.weatherCode)}</div>
          <div>{hour.temp}{units.temperature}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
