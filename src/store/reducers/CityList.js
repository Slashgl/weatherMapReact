import {
    setCityList,
    SET_CITY_LIST,
    removeCity,
    REMOVE_CITY,
    setActiveCity,
    SET_ACTIVE_CITY, SE_OPENING_AND_CLOSING_ASIDE_BAR, setOpeningAndClosingAsideBar,
} from '../actions/CityList'
import { weatherApi } from 'services'

const initialState = {
    cityList: [],
    activeCity: {},
    setOpeningAndClosingAsideBar: false,
}

const setCity = (lat, lon, name) => async (dispatch) => {
    const res = await weatherApi.getDataWeather(lat, lon)

    let cityData = {
        id: Date.now(),
        geoName: 'My Location',
        backgroundDescription: res.data.current.weather[0].main,
        name: name,
        hourly: res.data.hourly.slice(0, 11),
        forecast: res.data.daily,
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

    dispatch(setCityList(cityData))
    dispatch(setActiveCity(cityData))
}

const deleteCity = (id) => (dispatch) => {
    dispatch(removeCity(id))
}

const fixActiveCity = (city) => (dispatch) => {
    dispatch(setActiveCity(city))
}

const setOpeningAndClosing = () => (dispatch) => {
    dispatch(setOpeningAndClosingAsideBar())
}

const cityListReducer = (state = initialState, action) => {
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
        case SET_ACTIVE_CITY:
            return {
                ...state,
                activeCity: action.payload,
            }
        case SE_OPENING_AND_CLOSING_ASIDE_BAR:
            return {
                ...state,
                setOpeningAndClosingAsideBar: !setOpeningAndClosingAsideBar
            }
        default:
            return state
    }
}

export { deleteCity, cityListReducer, setCity, fixActiveCity, setOpeningAndClosing }
