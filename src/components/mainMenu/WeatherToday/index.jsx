import React from 'react'
import dayjs from 'dayjs'
import { GetHourlyList } from 'store'
import styles from './styles.module.scss'

const WeatherToday = () => {
    const data = GetHourlyList()

    return (
        <div className={styles.today}>
            <div className={styles.today__title}>
                <div>
                    Cloudy conditions from 1AM-9AM, with showers expected at
                    9AM.
                </div>
            </div>
            <ul className={styles.today__items}>
                {data &&
                    data.map((day, index) => (
                    <li key={index} className={styles.today__item}>
                        <div className={styles.today__time}>
                            {index === 0
                                ? 'Now'
                                : dayjs.unix(day.dt).format(`h A`)}
                        </div>

                        <div className={styles.today__img}>
                            <img
                                width="34px"
                                height="34px"
                                src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather.map(
                                    (icon) => icon.icon
                                )}.png`}
                                alt="img"
                            />
                        </div>
                        <div className={styles.today__degrees}>
                            {`${Math.round(day.temp)}`}
                            &deg;
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WeatherToday
