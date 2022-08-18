import {setCityList, SET_CITY_LIST} from "../Actions/cityList";
import {weatherApi} from "services";
import {createStore} from "redux";

const initialState = {
    cityList: {}
}

export const setCity = (lat, lon) => async dispatch => {
    const res = await weatherApi.getDataWeather(lat, lon)

}


