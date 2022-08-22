import React from 'react'
import {setCity} from "store"
import {useDispatch} from "react-redux"
import styles from './styles.module.scss'

const List = ({cityList}) => {

    const dispatch = useDispatch()

    const addCity = (el) => {
        try {
            dispatch(setCity(el.lat, el.lon, el.name))
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <ul className={styles.popup__results}>
            {cityList &&
                cityList.map((el, index) => {
                    return (
                        <li key={index} className={styles.popup__item} onClick={() => addCity(el)}>
                            <div className={styles.popup__name}>{el.name}</div>
                            <div className={styles.popup__country}>{el.state}</div>
                        </li>
                    )
                })}
        </ul>
    )
}

export default List