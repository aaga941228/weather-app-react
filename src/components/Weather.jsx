import React from 'react'

const Weather = ({ data, handlerWeatherCity }) => {
    console.log(data)
    const { clouds, coord, main, name, sys, weather, wind } = data
    return (
        <div className='container my-5 p-4'>
            <div className='row'>
                <div className='col-md-8 mx-auto text-center'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1 id='weather-location' className='h3'>{name}</h1>
                            <h3 id='weather-description' className='h4'></h3>
                            <h3 id='weather-string'></h3>
                            <ul className='list-group mt-3'>
                                <li id='weather-humidity' className='list-group-item'>Humidity {main && main.humidity}</li>
                                <li id='weather-temp' className='list-group-item'>Temperature {main && main.temp}</li>
                                <li id='weather-temp' className='list-group-item'>Feels like {main && main.feels_like}</li>
                                <li id='weather-wind' className='list-group-item'>Speed {wind && wind.speed} km/h</li>
                            </ul>
                        </div>
                    </div>

                    <div className='card mt-4'>
                        <div className='card-body'>
                            <form id='w-form' onSubmit={handlerWeatherCity}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id='city'
                                        name='city'
                                        className='form-control'
                                        placeholder='City'
                                        autoFocus
                                    />
                                </div>
                                <div className='form-group'>
                                    <button className='btn btn-dark btn-block' id='w-change-btn' type='sumit'>
                                        Choose a city
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather