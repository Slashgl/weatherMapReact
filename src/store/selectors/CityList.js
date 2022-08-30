import { useSelector } from 'react-redux'

export const GetCityList = () =>
    useSelector((state) => state.cityListReducer.cityList)
export const GetActiveIndex = () =>
    useSelector((state) => state.cityListReducer.activeIndex)

