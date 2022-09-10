import {useSelector} from "react-redux";

export const GetActiveCity = () =>
    useSelector((state) => state.activeCityReducer.activeCity)
export const GetHourlyList = () =>
    useSelector((state) => state.activeCityReducer.activeCity.hourly)
export const GetForecastList = () =>
    useSelector((state) => state.activeCityReducer.activeCity.forecast)
export const GetNameCity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.name)
export const GetIpNameCity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.ipName)
export const GetTempHigh = () =>
    useSelector((state) => state.activeCityReducer.activeCity.tempHigh)
export const GetTempLow = () =>
    useSelector((state) => state.activeCityReducer.activeCity.tempLow)
export const GetDescription = () =>
    useSelector((state) => state.activeCityReducer.activeCity.description)
export const GetTempCurrent = () =>
    useSelector((state) => state.activeCityReducer.activeCity.tempCurrent)
export const GetUvIndex = () =>
    useSelector((state) => state.activeCityReducer.activeCity.uvi)
export const GetNameUvi = () =>
    useSelector((state) => state.activeCityReducer.activeCity.boardUvi)
export const GetImgUvi = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgUvi)
export const GetLevelUvi = () =>
    useSelector((state) => state.activeCityReducer.activeCity.levelUvi)
export const GetDescriptionUvi = () =>
    useSelector((state) => state.activeCityReducer.activeCity.descriptionUvi)
export const GetSunrise = () =>
    useSelector((state) => state.activeCityReducer.activeCity.sunrise)
export const GetNameSunrise = () =>
    useSelector((state) => state.activeCityReducer.activeCity.boardSunrise)
export const GetImgSunrise = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgSunrise)
export const GetTime = () =>
    useSelector((state) => state.activeCityReducer.activeCity.time)
export const GetHumidity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.humidity)
export const GetNameHumidity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.boardHumidity)
export const GetImgHumidity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgHumidity)
export const GetDescriptionHumidity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.descriptionHumidity)
export const GetSignHumidity = () =>
    useSelector((state) => state.activeCityReducer.activeCity.signHumidity)
export const GetNameWind = () =>
    useSelector((state) => state.activeCityReducer.activeCity.boardWind)
export const GetImgWind = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgWind)
export const GetImgCompass = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgCompass)
export const GetNameFeelsLike = () =>
    useSelector((state) => state.activeCityReducer.activeCity.boardFeelsLike)
export const GetImgFeelsLike = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgFeelsLike)
export const GetSignFeelsLike = () =>
    useSelector((state) => state.activeCityReducer.activeCity.signFeelsLike)
export const GetDescriptionFeelsLike = () =>
    useSelector(
        (state) => state.activeCityReducer.activeCity.descriptionFeelsLike
    )
export const GetVisibility = () =>
    useSelector((state) => state.activeCityReducer.activeCity.visibility)
export const GetNameVisibility = () =>
    useSelector((state) => state.activeCityReducer.activeCity.boardVisibility)
export const GetImgVisibility = () =>
    useSelector((state) => state.activeCityReducer.activeCity.imgVisibility)
export const GetDescriptionVisibility = () =>
    useSelector(
        (state) => state.activeCityReducer.activeCity.descriptionVisibility
    )
export const GetSignVisibility = () =>
    useSelector((state) => state.activeCityReducer.activeCity.signVisibility)