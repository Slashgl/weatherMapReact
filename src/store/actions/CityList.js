export const SET_CITY_LIST = 'cityList/SET_CITY_LIST'
export const REMOVE_CITY = 'cityList/REMOVE_CITY'
export const SET_ACTIVE_CITY = 'cityList/SET_ACTIVE_CITY'
export const SE_OPENING_AND_CLOSING_ASIDE_BAR = 'cityList/SE_OPENING_AND_CLOSING_ASIDE_BAR'

export const setCityList = (payload) => ({
    type: SET_CITY_LIST,
    payload,
})

export const removeCity = (payload) => ({
    type: REMOVE_CITY,
    payload,
})
export const setActiveCity = (payload) => ({
    type: SET_ACTIVE_CITY,
    payload
})
export const setOpeningAndClosingAsideBar = (payload) => ({
    type: SE_OPENING_AND_CLOSING_ASIDE_BAR,
    payload
})