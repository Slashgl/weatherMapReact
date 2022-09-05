import React from 'react'
import { setCity } from 'store'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'

const List = ({
    cityList,
    isHiddenMobileList,
    setIsHiddenMobileList,
    isClickInput,
    setIsClickInput,
}) => {
    const dispatch = useDispatch()

    const addCity = (el) => {
        try {
            dispatch(setCity(el.lat, el.lon, el.name))
        } catch (e) {
            console.log(e)
        }
    }

    const hiddenWrapperAsideBar = () => {
        setIsHiddenMobileList(!isHiddenMobileList)
    }

    const hiddenButtonClose = () => {
        setIsClickInput(!isClickInput)
    }
    return (
        <div className={styles.popup__wrapper}>
            <ul
                className={styles.popup__results}
                style={{ display: isHiddenMobileList ? 'block' : null }}
            >
                {cityList &&
                    cityList.map((el, index) => (
                        <li
                            key={index}
                            className={styles.popup__item}
                            onClick={() => {
                                addCity(el)
                                hiddenWrapperAsideBar()
                                hiddenButtonClose()
                            }}
                        >
                            <div className={styles.popup__name}>{el.name}</div>
                            <div className={styles.popup__country}>
                                {el.state}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default List
