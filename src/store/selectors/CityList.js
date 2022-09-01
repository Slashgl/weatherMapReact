import { useSelector } from 'react-redux'

export const GetCityList = () =>
    useSelector((state) => state.cityListReducer.cityList)
export const GetActiveIndex = () =>
    useSelector((state) => state.cityListReducer.activeIndex)
export const GetHourlyList = () =>
    useSelector((state) => state.cityListReducer.hourlyList)
export const GetForecastList = () =>
    useSelector((state) => state.cityListReducer.forecastList)
