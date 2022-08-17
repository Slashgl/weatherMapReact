import {api} from '../api'


const weatherApi = {
    getListCountry: (valueInput) => api.get(`/geo/1.0/direct?q=${valueInput}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`),
    getDataWeather: (lat, lon) => api.get(`data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`)
}

export default weatherApi