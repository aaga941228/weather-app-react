import React, { useState, useEffect } from 'react';
import axios from 'axios'
import WeatherToday from './components/Weather/index'
import WeatherNextDays from './components/WeatherNextDays/index'
import NavBar from './components/NavBar/index'
//import currentWeatherMocks from './mocks/currentWeather'
//import fiveDaysWeatherMocks from './mocks/fiveDaysWeather'

function App() {
  const [city, setCity] = useState('merida')
  const [weather, setWeather] = useState({})
  const [fiveDaysWeather, setFiveDaysWeather] = useState({})
  const [apiKey, setApiKey] = useState('d24d014f7ad8373112e8cca15fef2894')
  const [apiURL, setApiURL] = useState(`https://api.openweathermap.org/data/2.5`)

  async function getWeather() {
    try {
      const query = `?q=${city}&appid=${apiKey}&units=metric`
      const response = await axios.get(`${apiURL}/weather${query}`)
      const { data } = response
      setWeather(data)
      //const data = await currentWeatherMocks()
      //setWeather(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function getWeatherFiveDays() {
    try {
      const query = `?q=${city}&appid=${apiKey}&units=metric`
      const response = await axios.get(`${apiURL}/forecast${query}`)
      const { data } = response
      setWeather(data)
      //const data = await fiveDaysWeatherMocks()
      //setFiveDaysWeather(data)
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
    </>
  );
}

export default App;
