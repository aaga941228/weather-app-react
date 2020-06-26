import React, { useState, useEffect } from 'react'
import { convertToTime, convertFullToDate } from '../../utils/timeConverter'
import color from '../../utils/colors'
import './styles.css'

const WeatherToday = ({ data }) => {
    const [bgColor, setBgColor] = useState('#6c757d')
    const { main, name, weather, sys, dt, wind } = data

    useEffect(() => {
        main && setBgColor(color(main.temp))
    }, [main])

    return (
        <>
            {
                !!main && (
                    <main className='text-light' style={{ backgroundColor: bgColor }}>
                        <div className='container'>
                            <div className='row pt-3'>
                                <div className='col-md-4'>
                                    <h1 className='m-0'>{name}, {sys.country}</h1>
                                    <small className='m-0'><strong>{convertFullToDate(dt)}</strong></small>
                                    <p className='m-0 display-4'>{main && Math.floor(main.temp)} °C</p>
                                    <p className='m-0'>Feels like {main && Math.floor(main.feels_like)} °C</p>
                                </div>
                                <div className='col-md-8'>
                                    <div className='d-flex align-items-center'>
                                        <img className="logo" src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt='weather icon' />
                                        <div>
                                            <p className='m-2'>{weather[0].main}, {weather[0].description}</p>
                                            <p className='m-2'>Wind speed {wind.speed} m/s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row pb-3'>
                                <div className='col'>
                                    <p className='m-0'>Sunrise {convertToTime(sys.sunrise)} a.m.</p>
                                    <p className='m-0'>Sunset {convertToTime(sys.sunset)} p.m.</p>
                                </div>
                            </div>
                        </div>
                    </main>
                )
            }
        </>
    )
}

export default WeatherToday