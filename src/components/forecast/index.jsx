import React from 'react'
import styles from './styles.module.scss'
import {GetCityList} from "../../store/selectors/CityList";
import {activeIndex} from "../../store/reducers/CityList";

const Forecast = ({data}) => {
    const defaultData = GetCityList(activeIndex())
    console.log(defaultData)

    const translateTimeOfWeek = (timestamp) => {
        const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const day = new Date();
        day.setTime(timestamp + '000')
        const hours = day.getDay();
        return daysName[hours]
    }

    return(
        <div className={styles.forecast}>
            <div className={styles.title}>10-DAY FORECAST</div>
            <ul className={styles.forecast__items}>
                {
                    defaultData?.map((el,index) => {
                        return el.forecast.map((day, index) => {
                            return (
                                <li index={`key_${index}`}
                                    className={styles.forecast__item}>
                                    <div className={styles.forecast__left}>
                                        <div className={styles.forecast__week}>{translateTimeOfWeek(day.dt)}</div>
                                        <img height='34px' width='34px' src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather.map(icon => icon.icon)}.png`} alt='img'/>
                                    </div>
                                    <div className={styles.forecast__right}>
                                        <div className={styles.forecast__min}>{Math.round(day.temp.min)}&deg;</div>
                                        <div className={styles.forecast__line}>
                                            <span className={styles.forecast__range} style={{left: `${Math.round(day.temp.min)}px`, width: `${Math.round(day.temp.min) + Math.round(day.temp.max)}px`}}></span>
                                        </div>
                                        <div className={styles.forecast__max}>{Math.round(day.temp.max)}&deg;</div>
                                    </div>
                                </li>
                            )
                        })
                    })
                }
            </ul>
        </div>
    )
}
export default Forecast