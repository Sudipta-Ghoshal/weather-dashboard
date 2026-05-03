import { useEffect, useEffectEvent, useState } from 'react';
import { useContext } from 'react';
import { LocationContext } from '../context';

const initialWeather = {
    location: '',
    climate: '',
    temperature: '',
    maxTemperature: '',
    minTemperature: '',
    humidity: '',
    cloudPercentage: '',
    windSpeed: '',
    time: '',
    longitude: '',
    latitude: ''
};


const useWeather = () => {
    const [weather, setWeather] = useState(initialWeather);

    const [loading, setLoading] = useState({
        isLoading: true,
        message: 'Finding location...'
    });

    const [error, setError] = useState(null);
    const { selectedLocation } = useContext(LocationContext);


    const fetchWeatherData = useEffectEvent(async (latitude, longitude) => {
        try {
            setLoading({
                isLoading: true,
                message: 'Fetching weather data...'
            })

            setError(null);

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error(`Failed to fetch weather data : ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            const updatedWeather = {
                location: data.name,
                climate: data.weather[0].main,
                temperature: data.main.temp,
                maxTemperature: data.main.temp_max,
                minTemperature: data.main.temp_min,
                humidity: data.main.humidity,
                cloudPercentage: data.clouds.all,
                windSpeed: data.wind.speed,
                time: data.dt,
                longitude: data.coord.lon,
                latitude: data.coord.lat
            }
            setWeather(updatedWeather);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading({
                isLoading: false,
                message: ''
            })
        }
    });

    const handleLocationError = useEffectEvent((locationError) => {
        setError(locationError.message);
        setLoading({
            isLoading: false,
            message: ''
        })
    });

    useEffect(() => {
        if (selectedLocation.latitude && selectedLocation.longitude) {
            const timeoutId = setTimeout(() => {
                fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
            }, 0);

            return () => clearTimeout(timeoutId);
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude)
            }, handleLocationError, { enableHighAccuracy: true });
        }

    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return { weather, loading, error };
}

export default useWeather;
