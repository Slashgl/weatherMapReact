import React from 'react';
import forecastApi from "@services/forecastApi";
import styles from './styles.module.scss';

const Forecast = () => {
    const api = forecastApi()
    const element = api.map(el => {
        return (
            <li key={el.id} className={styles.forecast__item}>
                <div className={styles.forecast__left}>
                    <div className={styles.forecast__week}>{el.day}</div>
                    <img width='20px' height='20px' src='https://img2.freepng.ru/20180626/ipe/kisspng-computer-icons-cloud-cover-meteorology-rain-day-time-5b32197e96f184.0483834715300099826183.jpg' alt='img'/>
                </div>
                <div className={styles.forecast__right}>
                    <div className={styles.forecast__min}>{`${el.min}`}&deg;</div>
                    <div className={styles.forecast__line}></div>
                    <div className={styles.forecast__max}>{el.max}&deg;</div>
                </div>
            </li>
        )
    })

    return(
        <div className={styles.forecast}>
            <div className={styles.title}>10-DAY FORECAST</div>
            <ul className={styles.forecast__items}>
                {element}
            </ul>
        </div>
    )
}
export default Forecast;