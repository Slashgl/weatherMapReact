import React, {useContext} from 'react'
import styles from './styles.module.scss'
import logoUiIndex from 'assets/img/sun.max.fill.svg'
import logoVector from 'assets/img/Vector.svg'
import logoSunrise from 'assets/img/sunrise.fill.svg'
import logoWind from 'assets/img/wind.svg'
import logoCompass from 'assets/img/compass.svg'
import logoTemp from 'assets/img/thermometer.svg'
import logoHumidity from 'assets/img/humidity.svg'
import logoEye from 'assets/img/eye.fill.svg'
import {Context} from "../context";

const WeatherBoards = () => {

    const nameBoards = [
        {boards: 'FEELSLIKE'},
        {boards: 'HUMIDITY'},
        {boards: 'VISIBILITY'},
    ]

    const {mainMenu, translateTimeOfHourPM, translateTimeOfHourAM} = useContext(Context)

    return (
        <div className={styles.boards}>
            <div className={styles.board}>
                <div className={styles.board__title}>
                    <img className={styles.logo} src={logoUiIndex} alt='img'/>
                    uv index
                </div>
                <div className={styles.board__index}>{Math.round(mainMenu?.current.uvi)}</div>
                <div className={styles.board__level}>Middle</div>
                <div className={styles.board__lvlImg}>
                    <span className={styles.board__circle} style={{left: `${mainMenu?.current.uvi}px`}}></span>
                </div>
                <div className={styles.board__description}>Middle for the rest of the day.</div>
            </div>
            <div className={styles.board}>
                <div className={styles.board__title}>
                    <img className={styles.logo} src={logoSunrise} alt='img'/>
                    sunrise
                </div>
                <div className={styles.board__time}>{translateTimeOfHourAM(mainMenu?.current.dt)}<span className={styles.board__format}> AM</span></div>
                <div className={styles.board__imgVector}>
                    <img className={styles.board__vector} src={logoVector} alt='img'/>
                </div>
                <div className={styles.board__description}>Sunrise: {translateTimeOfHourPM(mainMenu?.current.sunrise)} PM</div>
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
            {nameBoards?.map(el => {
                return (
                    <div key={el.boards} className={styles.board}>
                        {
                            el.boards === 'HUMIDITY' ?
                               <>
                                   <div className={styles.board__title}>
                                       <img className={styles.logo} src={logoHumidity} alt='img'/>
                                       {el.boards}
                                   </div>

                                   <div className={styles.board__percent}>{Math.round(mainMenu?.current.humidity)}%</div>
                                   <div className={styles.board__description}>The dew point is 21° right now.</div>
                               </>
                                 :
                            el.boards === 'FEELSLIKE' ?
                                <>
                                    <div className={styles.board__title}>
                                        <img className={styles.logo} src={logoTemp} alt='img'/>
                                        {el.boards}
                                    </div>

                                    <div className={styles.board__degrees}>{Math.round(mainMenu?.current.feels_like)}&deg;</div>
                                    <div className={styles.board__description}>Similar to the actual temperature</div>
                                </> :
                            el.boards === "VISIBILITY" ?
                                <>
                                    <div className={styles.board__title}>
                                        <img className={styles.logo} src={logoEye} alt='img'/>
                                        {el.boards}
                                    </div>

                                    <div className={styles.board__visibility}>{String(mainMenu?.current.visibility).slice(0, 2)} км</div>
                                    <div className={styles.board__description}>Visibility is good</div>
                                </> : null
                        }
                    </div>
                )
            })}

        </div>
    )
}
export default WeatherBoards