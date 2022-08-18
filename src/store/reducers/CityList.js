import {setCityList, SET_CITY_LIST} from "../actions/CityList";
import {weatherApi} from "services";
import {createStore} from "redux";

const initialState = {

}

export const setCity = (lat, lon) => async dispatch => {
    const res = await weatherApi.getDataWeather(lat, lon)
    console.log(res)
    dispatch(setCity(res))
}

export const cityListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITY_LIST':
            return action.payload
        default:
            return state
    }
}

