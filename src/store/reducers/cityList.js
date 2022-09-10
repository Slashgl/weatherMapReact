import {
    setCityList,
    SET_CITY_LIST,
    removeCity,
    REMOVE_CITY,
} from '../actions/cityList'

import { setActiveCity } from '../actions/activeCity'

import { weatherApi } from 'services'
import {
    logoEye,
    logoHumidity,
    logoSunrise,
    logoTemp,
    logoUiIndex,
    logoWind,
    logoCompass,
} from 'assets'

const initialState = {
    cityList: [],
}

const setCity = (lat, lon, name) => async (dispatch) => {
    const res = await weatherApi.getDataWeather(lat, lon)
    let cityFromIp
    try {
    } catch (e) {
        console.log(e)
    }

    let cityData = {
        id: Date.now(),
        geoName: 'My Location',
        backgroundDescription: res.data.current.weather[0].main,
        name: name,

        description: res.data.current.weather[0].description,
        tempCurrent: res.data.current.temp,
        tempHigh: res.data.daily[0].temp.max,
        tempLow: res.data.daily[0].temp.min,

        hourly: res.data.hourly.slice(0, 11),
        forecast: res.data.daily,
        boardWind: 'WIND',
        imgWind: logoWind,
        imgCompass: logoCompass,

        boardFeelsLike: 'FEELSLIKE',
        imgFeelsLike: logoTemp,
        feels: res.data.current.feels_like,
        descriptionFeelsLike: `Similar to the actual temperature`,
        signFeelsLike: `°`,

        boardHumidity: 'HUMIDITY',
        imgHumidity: logoHumidity,
        humidity: res.data.current.humidity,
        descriptionHumidity: `The dew point is 21° right now.`,
        signHumidity: '%',

        boardSunrise: 'SUNRISE',
        sunrise: res.data.current.sunrise,
        imgSunrise: logoSunrise,
        time: res.data.current.dt,

        boardUvi: 'UV INDEX',
        imgUvi: logoUiIndex,
        uvi: res.data.current.uvi,
        levelUvi: 'Middle',
        descriptionUvi: `Middle for the rest of the day.`,

        boardVisibility: 'VISIBILITY',
        imgVisibility: logoEye,
        descriptionVisibility: `Visibility is good`,
        signVisibility: ' км',
        visibility: res.data.current.visibility,
    }

    dispatch(setCityList(cityData))
    dispatch(setActiveCity(cityData))
}

const deleteCity = (id) => (dispatch) => {
    dispatch(removeCity(id))
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
        default:
            return state
    }
}

export { deleteCity, cityListReducer, setCity }
