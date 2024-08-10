// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css'

const Weather = ({ latitude, longitude }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = '208a121e0ebeabb12b2c7bbf6ca4fe79';

    useEffect(() => {
        const fetchWeather = async () => {
            if (latitude && longitude) {
                setLoading(true);
                setError(null);

                try {
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
                    );
                    setWeatherData(response.data);
                    setLoading(false);
                } catch (error) {
                    setError('Failed to fetch weather data');
                    setLoading(false);
                }
            }
        };

        fetchWeather();
    }, [latitude, longitude]);


    return (
        <div className="app">
            <h1>Weather </h1>
            {loading && <p>Loading weather data...</p>}
            {error && <p>{error}</p>}
            {weatherData && !loading && !error && (
                <div className="weather-container">
                    <h2>Weather at {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
