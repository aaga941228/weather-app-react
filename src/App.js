import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [apiKey, setApiKey] = useState("d24d014f7ad8373112e8cca15fef2894")
  const [city, setCity] = useState('merida')
  const [apiURL, setApiURL] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  const [weather, setWeather] = useState({})

  async function getWeather() {
    const response = await axios.get(apiURL)
    const { data } = response
    setWeather(data)
  }

  useEffect(() => {
    getWeather()
  }, [city])

  return (
    <Weather weather={weather} />
  );
}

export default App;
