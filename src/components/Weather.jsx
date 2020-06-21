import React from 'react'

const Weather = ({ weather }) => {
    return (
        <div>
            Weather {weather.toString()}
        </div>
    )
}

export default Weather