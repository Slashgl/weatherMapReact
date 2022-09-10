import React from 'react'
import { useDispatch } from 'react-redux'
import {setCity} from 'store'
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

    const hiddenWrapperAsideBar = () => setIsHiddenMobileList(!isHiddenMobileList)
    const hiddenButtonClose = () => setIsClickInput(!isClickInput)
    const handlerClick = (el) => {
        addCity(el)
        hiddenWrapperAsideBar()
        hiddenButtonClose()
    }

    return (
        <div className={styles.popup__wrapper}>
            {
                isHiddenMobileList && <ul
                    className={styles.popup__results}
                >
                    {cityList &&
                        cityList.map((el, index) => (
                            <li
                                key={index}
                                className={styles.popup__item}
                                onClick={() => handlerClick(el)}
                            >
                                <div className={styles.popup__name}>{el.name}</div>
                                <div className={styles.popup__country}>
                                    {el.state}
                                </div>
                            </li>
                        ))}
                </ul>
            }
        </div>
    )
}

export default List
