import React from 'react'
import {GetActiveIndex, GetCityList} from "../../store/selectors/CityList"
import styles from "./styles.module.scss"
import logoUiIndex from "../../assets/img/sun.max.fill.svg"
import logoSunrise from "../../assets/img/sunrise.fill.svg"
import logoVector from "../../assets/img/Vector.svg"
import logoWind from "../../assets/img/wind.svg"
import logoCompass from "../../assets/img/compass.svg"
import logoHumidity from "../../assets/img/humidity.svg"
import logoTemp from "../../assets/img/thermometer.svg"
import logoEye from "../../assets/img/eye.fill.svg"


const MainMenu = () => {

    const defaultData = GetCityList()
    const activeIndex = GetActiveIndex()

    const nameBoards = [
        {boards: 'FEELSLIKE'},
        {boards: 'HUMIDITY'},
        {boards: 'VISIBILITY'},
    ]

    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})
    }

    const translateTimeOfWeek = (timestamp) => {
        const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const day = new Date();
        day.setTime(timestamp + '000')
        const hours = day.getDay();
        return daysName[hours]
    }

    const transferTimeOfHours = (timestamp) => {
        const nameHours = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
        const time = new Date()
        time.setTime(timestamp + '000')
        const getHours = time.getHours()

        return nameHours[getHours]
    }

    return(
        <div>
            <div className={styles.header}>
                <div className={styles.header__title}>{defaultData[activeIndex]?.name || defaultData[activeIndex]?.ipName}</div>
                <div className={styles.header__degrees}>{Math.round(defaultData[activeIndex]?.tempCurrent)}&deg;</div>
                <div className={styles.header__description}>{defaultData[activeIndex]?.description}</div>
                <div className={styles.header__coordinates}>{`H:${Math.round(defaultData[activeIndex]?.tempHigh)}`}&deg; {`L:${Math.round(defaultData[activeIndex]?.tempLow)}`}&deg;</div>
            </div>
            <div className={styles.table}>
                <div className={styles.forecast}>
                    <div className={styles.title}>10-DAY FORECAST</div>
                    <ul className={styles.forecast__items}>
                        {
                            defaultData[activeIndex] &&
                            defaultData[activeIndex].forecast.map((day, index) => (
                                <li key={`key_${index}`}
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
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <div className={styles.today}>
                        <div className={styles.today__title}>Cloudy conditions from 1AM-9AM, with
                            showers expected at 9AM.</div>
                        <ul className={styles.today__items}>
                            {defaultData[activeIndex] &&
                                defaultData[activeIndex].hourly.slice(0, 10).map((day, index) => (
                                    <li key={index} className={styles.today__item}>
                                        <div className={styles.today__time}>{transferTimeOfHours(day.dt)}</div>
                                        <div className={styles.today__img}><img width='34px' height='34px' src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${day.weather.map(icon => icon.icon)}.png`} alt='img'/></div>
                                        <div className={styles.today__degrees}>{`${Math.round(day.temp)}`}&deg;</div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className={styles.boards}>
                        <div className={styles.board}>
                            <div className={styles.board__title}>
                                <img className={styles.logo} src={logoUiIndex} alt='img'/>
                                uv index
                            </div>
                            <div className={styles.board__index}>{Math.round(defaultData[activeIndex]?.uvi)}</div>
                            <div className={styles.board__level}>Middle</div>
                            <div className={styles.board__lvlImg}>
                                <span className={styles.board__circle} style={{left: `${defaultData[activeIndex]?.uvi}px`}}></span>
                            </div>
                            <div className={styles.board__description}>Middle for the rest of the day.</div>
                        </div>
                        <div className={styles.board}>
                            <div className={styles.board__title}>
                                <img className={styles.logo} src={logoSunrise} alt='img'/>
                                sunrise
                            </div>
                            <div className={styles.board__time}>{translateTimeOfHourAM(defaultData[activeIndex]?.time)}</div>
                            <div className={styles.board__imgVector}>
                                <img className={styles.board__vector} src={logoVector} alt='img'/>
                            </div>
                            <div className={styles.board__description}>Sunrise: {translateTimeOfHourAM(defaultData[activeIndex]?.sunrise)}</div>
                        </div>
                        <div className={styles.board}>
                            <div className={styles.board__title}>
                                <img className={styles.logo} src={logoWind} alt='img'/>
                                Wind
                            </div>
                            <div className={styles.board__imgCompass}>
                                <img className={styles.board__compass} src={logoCompass} alt='img'/>
                            </div>
                        </div>
                        {nameBoards?.map((el, index) => (
                            <div key={index}  className={styles.board}>
                                {
                                el.boards === 'HUMIDITY' ?
                                    <>
                                        <div className={styles.board__title}>
                                            <img className={styles.logo} src={logoHumidity} alt='img'/>
                                            {el.boards}
                                        </div>

                                        <div className={styles.board__percent}>{Math.round(defaultData[activeIndex]?.humidity)}%</div>
                                        <div className={styles.board__description}>The dew point is 21° right now.</div>
                                    </>
                                    :
                                el.boards === 'FEELSLIKE' ?
                                    <>
                                        <div className={styles.board__title}>
                                            <img className={styles.logo} src={logoTemp} alt='img'/>
                                            {el.boards}
                                        </div>

                                        <div className={styles.board__degrees}>{Math.round(defaultData[activeIndex]?.feels)}&deg;</div>
                                        <div className={styles.board__description}>Similar to the actual temperature</div>
                                    </> :
                                el.boards === "VISIBILITY" ?
                                    <>
                                        <div className={styles.board__title}>
                                            <img className={styles.logo} src={logoEye} alt='img'/>
                                            {el.boards}
                                        </div>

                                        <div className={styles.board__visibility}>{String(defaultData[activeIndex]?.visibility).slice(0, 2)} км</div>
                                        <div className={styles.board__description}>Visibility is good</div>
                                    </> : null
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainMenu

