const data = { "coord": { "lon": -89.62, "lat": 20.97 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 33.68, "feels_like": 36.95, "temp_min": 30.56, "temp_max": 35.56, "pressure": 1015, "humidity": 59 }, "visibility": 11265, "wind": { "speed": 4.1, "deg": 100 }, "clouds": { "all": 75 }, "dt": 1592767027, "sys": { "type": 1, "id": 7140, "country": "MX", "sunrise": 1592738290, "sunset": 1592786553 }, "timezone": -18000, "id": 3523349, "name": "Mérida", "cod": 200 }

const returnData = async () => data

export default returnData