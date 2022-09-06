import { useSelector } from 'react-redux'

export const GetCityList = () =>
    useSelector((state) => state.cityListReducer.cityList)
export const GetActiveCity = () =>
    useSelector((state) => state.cityListReducer.activeCity)
export const GetHourlyList = () =>
    useSelector((state) => state.cityListReducer.activeCity.hourly)
export const GetForecastList = () =>
    useSelector((state) => state.cityListReducer.activeCity.forecast)
export const GetNameCity = () =>
    useSelector((state) => state.cityListReducer.activeCity.name)
export const GetIpNameCity = () =>
    useSelector((state) => state.cityListReducer.activeCity.ipName)
export const GetTempHigh = () =>
    useSelector((state) => state.cityListReducer.activeCity.tempHigh)
export const GetTempLow = () =>
    useSelector((state) => state.cityListReducer.activeCity.tempLow)
export const GetDescription = () =>
    useSelector((state) => state.cityListReducer.activeCity.description)
export const GetTempCurrent = () =>
    useSelector((state) => state.cityListReducer.activeCity.tempCurrent)
export const GetUvIndex = () =>
    useSelector((state) => state.cityListReducer.activeCity.uvi)
export const GetSunrise = () =>
    useSelector((state) => state.cityListReducer.activeCity.sunrise)
export const GetTime = () =>
    useSelector((state) => state.cityListReducer.activeCity.time)
export const GetHumidity = () =>
    useSelector((state) => state.cityListReducer.activeCity.humidity)
export const GetVisibility = () =>
    useSelector((state) => state.cityListReducer.activeCity.visibility)



