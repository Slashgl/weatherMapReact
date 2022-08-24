import React from 'react'
import styles from './styles.module.scss'
import {GetActiveIndex, GetCityList} from "../../../store/selectors/CityList";

const WeatherToday = () => {

    const defaultData = GetCityList()
    const activeIndex = GetActiveIndex()

    const transferTimeOfHours = (timestamp) => {
        const nameHours = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
        const time = new Date()
        time.setTime(timestamp + '000')
        const getHours = time.getHours()

        return nameHours[getHours]
    }

    return(
        <div className={styles.today}>
            <div className={styles.today__title}>Cloudy conditions from 1AM-9AM, with
                showers expected at 9AM.</div>
            <ul className={styles.today__items}>
                {defaultData[activeIndex] &&
                    defaultData[activeIndex].hourly.slice(0, 10).map((day, index) => {

                    return (
                        <li key={index} className={styles.today__item}>
                            <div className={styles.today__time}>{transferTimeOfHours(day.dt)}</div>
                            <div className={styles.today__img}><img width='34px' height='34px' src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather.map(icon => icon.icon)}.png`} alt='img'/></div>
                            <div className={styles.today__degrees}>{`${Math.round(day.temp)}`}&deg;</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WeatherToday
