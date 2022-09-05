import { useSelector } from 'react-redux'

const GetCityList = () =>
    useSelector((state) => state.cityListReducer.cityList)
const GetActiveIndex = () =>
    useSelector((state) => state.cityListReducer.activeIndex)
const GetHourlyList = () =>
    useSelector((state) => state.cityListReducer.hourlyList)
const GetForecastList = () =>
    useSelector((state) => state.cityListReducer.forecastList)

export {GetCityList, GetActiveIndex, GetHourlyList, GetForecastList}
