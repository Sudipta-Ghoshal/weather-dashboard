import { useState, useEffect, useEffectEvent } from 'react';



const useWeather = () => {
    const [weather, setWeather] = useState({
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
    });

    const [loading, setLoading] = useState({
        isLoading: false,
        message: ''
    });

    const [error, setError] = useState(null);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                isLoading: true,
                message: 'Fetching weather data...'
            })

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error(`Failed to fetch weather data : ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            const updatedWeather = {
                ...weather,
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
                ...loading,
                isLoading: false,
                message: ''
            })
        }
    };

    const handleRefresh = useEffectEvent((latitude, longitude) => {
        fetchWeatherData(latitude, longitude)
    });

    useEffect(() => {
        setLoading({
            isLoading: true,
            message: 'Finding location...'
        })
        navigator.geolocation.getCurrentPosition((position) => {
            handleRefresh(position.coords.latitude, position.coords.longitude)
        })
    }, []);

    return { weather, loading, error };
}

export default useWeather;