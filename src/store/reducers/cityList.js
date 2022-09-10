import {
    setCityList,
    SET_CITY_LIST,
    removeCity,
    REMOVE_CITY,
} from '../actions/cityList'
import { setActiveCity } from '../actions/activeCity'
import { weatherApi } from 'services'

const initialState = {
    cityList: [],
}

const setCity = (lat, lon, name) => async (dispatch) => {
    try {
        const res = await weatherApi.getDataWeather(lat, lon)
        const cityFromIp = await weatherApi.getCityFromIp()

        let cityData = {
            id: Date.now(),
            geoName: 'My Location',
            ipName: cityFromIp.data.city,
            backgroundDescription: res.data.current.weather[0].main,
            name: name,
            description: res.data.current.weather[0].description,
            tempCurrent: res.data.current.temp,
            tempHigh: res.data.daily[0].temp.max,
            tempLow: res.data.daily[0].temp.min,
            hourly: res.data.hourly.slice(0, 11),
            forecast: res.data.daily,
            boardWind: 'WIND',
            boardFeelsLike: 'FEELSLIKE',
            feels: res.data.current.feels_like,
            descriptionFeelsLike: `Similar to the actual temperature`,
            boardHumidity: 'HUMIDITY',
            humidity: res.data.current.humidity,
            descriptionHumidity: `The dew point is 21° right now.`,
            boardSunrise: 'SUNRISE',
            sunrise: res.data.current.sunrise,
            time: res.data.current.dt,
            boardUvi: 'UV INDEX',
            uvi: res.data.current.uvi,
            levelUvi: 'Middle',
            descriptionUvi: `Middle for the rest of the day.`,
            boardVisibility: 'VISIBILITY',
            descriptionVisibility: `Visibility is good`,
            visibility: res.data.current.visibility,
        }

        dispatch(setCityList(cityData))
        dispatch(setActiveCity(cityData))
    } catch (e) {
        console.log(e)
    }
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
