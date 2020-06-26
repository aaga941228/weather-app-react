import React, { useState, useEffect } from 'react';
import axios from 'axios'
import WeatherToday from './components/Weather/index'
import WeatherNextDays from './components/WeatherNextDays/index'
import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'

function App() {
  const [city, setCity] = useState('merida')
  const [weather, setWeather] = useState({})
  const [fiveDaysWeather, setFiveDaysWeather] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = process.env.REACT_APP_API_URL

  async function getWeather() {
    try {
      const query = `?q=${city}&appid=${API_KEY}&units=metric`
      const response = await axios.get(`${API_URL}/weather${query}`)
      const { data } = response
      setWeather(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function getWeatherFiveDays() {
    try {
      const query = `?q=${city}&appid=${API_KEY}&units=metric`
      const response = await axios.get(`${API_URL}/forecast${query}`)
      const { data } = response
      setFiveDaysWeather(data)
    } catch (err) {
      console.log(err)
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
  }, [city])

  return (
    <>
      <NavBar handlerWeatherCity={handlerWeatherCity} />
      <WeatherToday data={weather} />
      <WeatherNextDays data={fiveDaysWeather} />
      <Footer />
    </>
  );
}

export default App;
