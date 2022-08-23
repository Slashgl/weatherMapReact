import React from 'react'
import styles from './styles.module.scss'
import {GetActiveIndex, GetCityList} from "../../store/selectors/CityList";

const Header = () => {
    const defaultData = GetCityList()
    const activeIndex = GetActiveIndex()
    return(
        <div className={styles.header}>
            <div className={styles.header__title}>{defaultData[activeIndex]?.name}</div>
            <div className={styles.header__degrees}>{Math.round(defaultData[activeIndex]?.tempCurrent)}&deg;</div>
            <div className={styles.header__description}>{defaultData[activeIndex]?.description}</div>
            <div className={styles.header__coordinates}>{`H:${Math.round(defaultData[activeIndex]?.tempHigh)}`}&deg; {`L:${Math.round(defaultData[activeIndex]?.tempLow)}`}&deg;</div>
        </div>
    )
}
export default Header