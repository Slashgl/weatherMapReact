import {useSelector} from "react-redux";

export const GetCityList = () => useSelector(state => state.cityListReducer)