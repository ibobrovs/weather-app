import React from 'react';

const WeatherCard = ({ title, weatherData }) => {
  return (
    <div>
      <h2>{title}</h2>
      {weatherData ? (
        <div>
          <p>{weatherData.temp}°C</p>
          <p>{weatherData.description}</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default WeatherCard;
