import React from 'react'
import {
    GetActiveCity,
    GetDescription,
    GetIpNameCity,
    GetNameCity,
    GetTempCurrent,
    GetTempHigh,
    GetTempLow,
} from 'store'
import styles from './styles.module.scss'

const Header = () => {
    const activeCity = GetActiveCity()
    const tempHigh = GetTempHigh()
    const tempLow = GetTempLow()
    const description = GetDescription()
    const tempCurrent = GetTempCurrent()
    const nameCity = GetNameCity()
    const ipNameCity = GetIpNameCity()

    return (
        <div className={styles.header}>
            {activeCity ? (
                <>
                    <div className={styles.header__title}>
                        {nameCity || ipNameCity}
                    </div>
                    <div className={styles.header__degrees}>
                        {Math.round(tempCurrent)}&deg;
                    </div>
                    <div className={styles.header__description}>
                        {description}
                    </div>
                    <div className={styles.header__coordinates}>
                        {`H:${Math.round(tempHigh)}`}
                        &deg; {`L:${Math.round(tempLow)}`}
                        &deg;
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Header
