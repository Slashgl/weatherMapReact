import { SET_ACTIVE_CITY, setActiveCity } from '../actions/activeCity'

const initialState = {
    activeCity: {},
}

const fixActiveCity = (city) => (dispatch) => {
    dispatch(setActiveCity(city))
}

const activeCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CITY:
            return {
                ...state,
                activeCity: action.payload,
            }
        default:
            return state
    }
}

export { activeCityReducer, fixActiveCity }
