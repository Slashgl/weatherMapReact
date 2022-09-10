import React from 'react'
import {DateFormat} from "utils";
import { GetForecastList } from 'store'
import styles from './styles.module.scss'

const Forecast = () => {
    const data = GetForecastList()

    return (
        <div className={styles.forecast}>
            <div className={styles.title}>10-DAY FORECAST</div>
            <ul className={styles.forecast__items}>
                {data &&
                    data.map((day, index) => (
                    <li key={`key_${index}`} className={styles.forecast__item}>
                        <div className={styles.forecast__left}>
                            <div className={styles.forecast__week}>
                                {DateFormat.formatWeek(day.dt)}
                            </div>
                            <img
                                height="34px"
                                width="34px"
                                src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather.map(
                                    (icon) => icon.icon
                                )}.png`}
                                alt="img"
                            />
                        </div>
                        <div className={styles.forecast__right}>
                            <div className={styles.forecast__min}>
                                {Math.round(day.temp.min)}
                                &deg;
                            </div>
                            <div className={styles.forecast__line}>
                                <span
                                    className={styles.forecast__range}
                                    style={{
                                        left: `${Math.round(day.temp.min)}px`,
                                        width: `${
                                            Math.round(day.temp.min) +
                                            Math.round(day.temp.max)
                                        }px`,
                                    }}
                                ></span>
                            </div>
                            <div className={styles.forecast__max}>
                                {Math.round(day.temp.max)}
                                &deg;
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Forecast
