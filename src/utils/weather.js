export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  const hourlyTime = weatherData.hourly.time.slice(0, 7);
  const hourlyTemperature = weatherData.hourly.temperature_2m.slice(0, 7);
  const hourlyWeatherCode = weatherData.hourly.weather_code.slice(0, 7);
  const hourlyData = hourlyTime.map((time, index) => ({
    time: new Date(time).getHours() + "시",
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

  const daysKor = ["일", "월", "화", "수", "목", "금", "토"];

  return dailyTime.map((dateStr, index) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = daysKor[date.getDay()];

    return {
      date: `${month}월 ${day}일 (${weekday})`,
      weatherCode: dailyWeatherCode[index],
      maxTemp: dailyTempMax[index],
    };
  });
};
