import React, { useState, useEffect } from 'react';
import axios from 'axios'
import WeatherToday from './components/WeatherToday/index'
import WeatherNextDays from './components/WeatherNextDays/'
import NavBar from './components/NavBar/'
import Footer from './components/Footer/'
import Error from './components/CityNotFound/'

function App() {
  const [city, setCity] = useState('merida')
  const [weather, setWeather] = useState({})
  const [fiveDaysWeather, setFiveDaysWeather] = useState({})
  const [error, setError] = useState(false)
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = process.env.REACT_APP_API_URL

  async function getWeather() {
    try {
      const query = `?q=${city}&appid=${API_KEY}&units=metric`
      const response = await axios.get(`${API_URL}/weather${query}`)
      const { data } = response
      setWeather(data)
    } catch {
      setError(true)
    }
  }

  async function getWeatherFiveDays() {
    try {
      const query = `?q=${city}&appid=${API_KEY}&units=metric`
      const response = await axios.get(`${API_URL}/forecast${query}`)
      const { data } = response
      setFiveDaysWeather(data)
    } catch {
      setError(true)
    }
  }

  function handlerWeatherCity(event) {
    event.preventDefault()
    const newCity = event.target.childNodes[0].value
    setCity(newCity)
  }

  useEffect(() => {
    getWeather()
    getWeatherFiveDays()
    setError(false)
  }, [city])

  return (
    <>
      <NavBar handlerWeatherCity={handlerWeatherCity} />
      {
        error
          ? <Error />
          : (
            <>
              <WeatherToday data={weather} />
              <WeatherNextDays data={fiveDaysWeather} />
            </>
          )}
      <Footer />
    </>
  );
}

export default App;
