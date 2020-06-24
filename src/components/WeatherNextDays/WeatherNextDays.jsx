import React, { useEffect, useState } from 'react'
import splitDays from '../../utils/splitDays'
import { convertToDate, convertToTime } from '../../utils/timeConverter'
import Loading from '../Loading/index'

const WeatherNextDays = ({ data }) => {
  const { list } = data
  const [weatherByDate, setWeatherByDate] = useState([])
  const isReady = () => !!weatherByDate

  useEffect(() => {
    const data = list && splitDays(list)
    setWeatherByDate(data)
  }, [list])

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <h2>Next days</h2>
        {isReady() ? (weatherByDate.map(element => (
          <div className="col-12 my-2" key={element[0].dt}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{convertToDate(element[0].dt)}</h5>
                <hr />
                {element.map(element => (
                  <div key={element.dt} className="">
                    <span className="ml-2 d-inline align-middle">{convertToTime(element.dt)}</span>
                    <img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} alt="" />
                    <span className="ml-2 d-inline align-middle">{element.weather[0].main} ({element.weather[0].description})</span>
                    <span className="ml-2 d-inline align-middle">{Math.floor(element.main.temp)} °C</span>
                    <span className="ml-2 d-inline align-middle">Feels like {Math.floor(element.main.feels_like)} °C</span>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))) : <Loading />}
      </div>
    </div>
  )
}

export default WeatherNextDays