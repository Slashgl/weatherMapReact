export const SET_CITY_LIST = 'cityList/SET_CITY_LIST'
export const REMOVE_CITY = 'cityList/REMOVE_CITY'

export const setCityList = (payload) => ({
    type: SET_CITY_LIST,
    payload,
})

export const removeCity = (payload) => ({
    type: REMOVE_CITY,
    payload
})
