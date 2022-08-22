import {useSelector} from "react-redux";

export const GetCityList = () => useSelector(state => state.cityListReducer.cityList)
export const GetGeolocationData = () => useSelector(state => state.cityListReducer.geolocationData)