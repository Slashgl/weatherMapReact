import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { cityListReducer } from './reducers/cityList'
import { activeCityReducer } from './reducers/activeCity'

const rootReducer = combineReducers({
    cityListReducer,
    activeCityReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// Используется для debug, удалить при окончании разработки
window.storage = store

export default store
