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
export const GetNameUvi = () =>
    useSelector((state) => state.cityListReducer.activeCity.boardUvi)
export const GetImgUvi = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgUvi)
export const GetLevelUvi = () =>
    useSelector((state) => state.cityListReducer.activeCity.levelUvi)
export const GetDescriptionUvi = () =>
    useSelector((state) => state.cityListReducer.activeCity.descriptionUvi)
export const GetSunrise = () =>
    useSelector((state) => state.cityListReducer.activeCity.sunrise)
export const GetNameSunrise = () =>
    useSelector((state) => state.cityListReducer.activeCity.boardSunrise)
export const GetImgSunrise = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgSunrise)
export const GetTime = () =>
    useSelector((state) => state.cityListReducer.activeCity.time)
export const GetHumidity = () =>
    useSelector((state) => state.cityListReducer.activeCity.humidity)
export const GetNameHumidity = () =>
    useSelector((state) => state.cityListReducer.activeCity.boardHumidity)
export const GetImgHumidity = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgHumidity)
export const GetDescriptionHumidity = () =>
    useSelector((state) => state.cityListReducer.activeCity.descriptionHumidity)
export const GetSignHumidity = () =>
    useSelector((state) => state.cityListReducer.activeCity.signHumidity)
export const GetNameWind = () =>
    useSelector((state) => state.cityListReducer.activeCity.boardWind)
export const GetImgWind = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgWind)
export const GetImgCompass = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgCompass)
export const GetNameFeelsLike = () =>
    useSelector((state) => state.cityListReducer.activeCity.boardFeelsLike)
export const GetImgFeelsLike = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgFeelsLike)
export const GetSignFeelsLike = () =>
    useSelector((state) => state.cityListReducer.activeCity.signFeelsLike)
export const GetDescriptionFeelsLike = () =>
    useSelector(
        (state) => state.cityListReducer.activeCity.descriptionFeelsLike
    )
export const GetVisibility = () =>
    useSelector((state) => state.cityListReducer.activeCity.visibility)
export const GetNameVisibility = () =>
    useSelector((state) => state.cityListReducer.activeCity.boardVisibility)
export const GetImgVisibility = () =>
    useSelector((state) => state.cityListReducer.activeCity.imgVisibility)
export const GetDescriptionVisibility = () =>
    useSelector(
        (state) => state.cityListReducer.activeCity.descriptionVisibility
    )
export const GetSignVisibility = () =>
    useSelector((state) => state.cityListReducer.activeCity.signVisibility)
