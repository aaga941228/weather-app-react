import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [city, setCity] = useState('merida')
  const [weather, setWeather] = useState({})
  const [apiKey, setApiKey] = useState('d24d014f7ad8373112e8cca15fef2894')
  const [apiURL, setApiURL] = useState(`https://api.openweathermap.org/data/2.5/weather`)

  async function getWeather() {
    const query = `?q=${city}&appid=${apiKey}&units=metric`
    const response = await axios.get(`${apiURL}${query}`)
    const { data } = response
    setWeather(data)
  }

  function handlerWeatherCity(event) {
    event.preventDefault()
    const newCity = event.target.childNodes[0].childNodes[0].value
    setCity(newCity)
  }

  useEffect(() => {
    getWeather()
  }, [city])

  return (
    <Weather data={weather} handlerWeatherCity={handlerWeatherCity} />
  );
}

export default App;
