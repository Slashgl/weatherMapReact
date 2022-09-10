import axios from 'axios'

export const weatherApiCity = axios.create({
    baseURL: `https://api.openweathermap.org`,
})

export const ipCity = axios.create({
    baseURL: 'https://json.geoiplookup.io/',
})
