import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const WeatherApp = () => {
    const cities = {
        Moscow: { lat: 55.7558, lon: 37.6173 },
        London: { lat: 51.5074, lon: -0.1278 },
        NeyYork: { lat: 40.7128, lon: -74.006 },
    }
    const [selectedCity, setSelectedCity] = useState("Moscow");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const apiKey = "API";
        const {lat, lon} = cities[selectedCity];
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data)
        }   catch (error) {
            console.error("Download error:", error);
        }
    })

}