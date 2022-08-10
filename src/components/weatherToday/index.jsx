import React from 'react'
import {weatherTodayApi} from 'services'
import styles from './styles.module.scss'

const WeatherToday = () => {
    const api = weatherTodayApi()

    return(
        <div className={styles.today}>
            <div className={styles.today__title}>Cloudy conditions from 1AM-9AM, with
                showers expected at 9AM.</div>
            <ul className={styles.today__items}>
                {api &&
                    api.map(el => {
                    return (
                        <li key={el.time} className={styles.today__item}>
                            <div className={styles.today__time}>{el.time}</div>
                            <div className={styles.today__img}><img src={el.icon} alt='img'/></div>
                            <div className={styles.today__degrees}>{`${el.degrees}`}&deg;</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WeatherToday
