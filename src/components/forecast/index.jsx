import React from 'react'
import {forecastApi} from 'services'
import styles from './styles.module.scss'


const Forecast = () => {
    const api = forecastApi()

    return(
        <div className={styles.forecast}>
            <div className={styles.title}>10-DAY FORECAST</div>
            <ul className={styles.forecast__items}>
                {api &&
                    api.map(el => {
                        return (
                            <li key={el.id}
                                className={styles.forecast__item}
                            >
                                <div className={styles.forecast__left}>
                                    <div className={styles.forecast__week}>{el.day}</div>
                                    <img src={el.icon} alt='img'/>
                                </div>
                                <div className={styles.forecast__right}>
                                    <div className={styles.forecast__min}>{`${el.min}`}&deg;</div>
                                    <div className={styles.forecast__line}/>
                                    <div className={styles.forecast__max}>{el.max}&deg;</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Forecast