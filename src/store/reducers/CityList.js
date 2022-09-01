import {
    setCityList,
    SET_CITY_LIST,
    removeCity,
    REMOVE_CITY,
    activeIndex,
    ACTIVE_INDEX, setHourlyList, SET_HOURLY_LIST, setForecastList, SET_FORECAST_LIST,
} from '../actions/CityList'
import { weatherApi } from 'services'

const initialState = {
    cityList: [],
    activeIndex: 0,
    description: null,
    hourlyList: [],
    forecastList: []
}

export const setCity = (lat, lon, name) => async (dispatch) => {
    const res = await weatherApi.getDataWeather(lat, lon)

    let cityData = {
        id: Date.now(),
        geoName: 'My Location',
        backgroundDescription: res.data.current.weather[0].main,
        name: name,
        time: res.data.current.dt,
        description: res.data.current.weather[0].description,
        tempCurrent: res.data.current.temp,
        tempHigh: res.data.daily[0].temp.max,
        tempLow: res.data.daily[0].temp.min,
        feels: res.data.current.feels_like,
        humidity: res.data.current.humidity,
        sunrise: res.data.current.sunrise,
        uvi: res.data.current.uvi,
        visibility: res.data.current.visibility,
    }

    let hourlyList = {
        hourly: res.data.hourly.slice(0, 10),
    }

    let forecastList = {
        forecast: res.data.daily,
    }
    dispatch(setCityList(cityData))
    dispatch(setHourlyList(hourlyList))
    dispatch(setForecastList(forecastList))
}

export const deleteCity = (id) => (dispatch) => {
    dispatch(removeCity(id))
}

export const setActiveIndex =
    (index = initialState.activeIndex) =>
    (dispatch) => {
        dispatch(activeIndex(index))
    }

export const cityListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_LIST:
            return { ...state, cityList: [...state.cityList, action.payload] }
        case REMOVE_CITY:
            return {
                ...state,
                cityList: state.cityList.filter(
                    (city) => city.id !== action.payload
                ),
            }
        case ACTIVE_INDEX:
            return { ...state, activeIndex: action.payload }
        case SET_HOURLY_LIST:
            return {...state, hourlyList: [...state.hourlyList, action.payload]}
        case SET_FORECAST_LIST:
            return {...state, forecastList: [...state.forecastList, action.payload]}
        default:
            return state
    }
}
