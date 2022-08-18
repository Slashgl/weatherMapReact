import React from 'react'
import {setCity} from "store"
import {useDispatch} from "react-redux"
// import {apiGetCountry, apiWeatherCountry} from 'src/ser'

const List = ({classNameList, classNameItem, classNameName, classNameCountry, cityList}) => {

    const dispatch = useDispatch()

    const addCity = (el) => {
        console.log(el)
        try {
            dispatch(setCity(el.lat, el.lon, el.name))
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <ul className={classNameList}>
            {cityList &&
                cityList.map((el, index) => (

                    <li key={index} className={classNameItem} onClick={() => addCity(el)}>
                        <div className={classNameName}>{el.name}</div>
                        <div className={classNameCountry}>{el.state}</div>
                    </li>
                ))}
        </ul>
    )
}

export default List