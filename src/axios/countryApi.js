import {api} from './api'
const apiKey = `f6c065f36d3bf94559470b07bcf0d80c`

export const countryApi = {
    requestToken: (valueInput) => api.get(`/geo/1.0/direct?q=${valueInput}&limit=5&appid=${apiKey}`)
}

export const weatherCountry = {
    requestToken: (lat, lon) => api.get(`data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
}

console.log(countryApi.requestToken('Paris'))