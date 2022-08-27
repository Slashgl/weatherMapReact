import axios from 'axios'

export const api = axios.create({
    baseURL: `https://api.openweathermap.org`,
})

export const ip = axios.create({
    baseURL: 'https://json.geoiplookup.io/',
})
