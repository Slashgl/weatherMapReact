import {setCityList, SET_CITY_LIST} from "../actions/CityList"
import {weatherApi} from "services"
import {removeCity, REMOVE_CITY} from "../actions/RemoveCity";

const initialState = {
    cityList: []
}

export const setCity = (lat, lon, name) => async dispatch => {
    const res = await weatherApi.getDataWeather(lat, lon)
    let cityData = {
        id: Date.now(),
        name: name,
        time: res.data.current.dt,
        description: res.data.current.weather[0].description,
        tempCurrent: res.data.current.temp,
        tempHigh: res.data.daily[0].temp.max,
        tempLow: res.data.daily[0].temp.min
    }
    dispatch(setCityList(cityData))
}

export const cityListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_LIST:
            return {...state, cityList: [...state.cityList, action.payload]}
        case REMOVE_CITY:
            return  {...state, cityList: state.cityList.filter(city => city.id !== action.payload)}
        default:
            return state
    }
}


