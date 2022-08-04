import React from 'react'
import styles from './styles.module.scss';
import logoUiIndex from '../../assets/img/sun.max.fill.svg'
import logoSubtract from '../../assets/img/Subtract.svg'
import logoVector from '../../assets/img/Vector.svg'
import logoSunrise from '../../assets/img/sunrise.fill.svg'
import logoWind from '../../assets/img/wind.svg'
import logoCompass from '../../assets/img/compass.svg'
import logoTemp from '../../assets/img/thermometer.svg'
import logoHumidity from '../../assets/img/humidity.svg'
import logoVisibility from '../../assets/img/eye.fill.svg'

const WeatherBoards = () => {

    return (
        <div className={styles.boards}>
            <div className={styles.board}>
                <div className={styles.board__item}>
                    <div className={styles.board__title}>
                        <img className={styles.logo} src={logoUiIndex} alt='img'/>
                        uv index
                    </div>
                    <div className={styles.board__index}>12</div>
                    <div className={styles.board__level}>Middle</div>
                    <div>
                        <img src={logoSubtract} alt='img'/>
                    </div>
                    <div className={styles.board__description}>Middle for the rest of the day.</div>
                </div>
            </div>
            <div className={styles.board}>
                <div className={styles.board__item}>
                    <div className={styles.board__title}>
                        <img className={styles.logo} src={logoSunrise} alt='img'/>
                        sunrise
                    </div>
                    <div className={styles.board__time}>11:28 AM</div>
                    <div>
                        <img className={styles.board__vector} src={logoVector} alt='img'/>
                    </div>
                    <div className={styles.board__description}>Sunrise: 9:45 pm</div>
                </div>
            </div>
            <div className={styles.board}>
                <div className={styles.board__item}>
                    <div className={styles.board__title}>
                        <img className={styles.logo} src={logoWind} alt='img'/>
                        Wind
                    </div>
                    <img className={styles.board__compass} src={logoCompass} alt='img'/>
                </div>
            </div>
            <div className={styles.board}>
                <div className={styles.board__item}>
                    <div className={styles.board__title}>
                        <img className={styles.logo} src={logoTemp} alt='img'/>
                        feels like
                    </div>
                    <div className={styles.board__degrees}>29°</div>
                    <div className={styles.board__description}>Similar to the
                        actual
                        temperature
                    </div>
                </div>
            </div>
            <div className={styles.board}>
                <div className={styles.board__item}>
                    <div className={styles.board__title}>
                        <img className={styles.logo} src={logoHumidity} alt='img'/>
                        humidity
                    </div>
                    <div className={styles.board__percent}>54%</div>
                    <div className={styles.board__level}>The dew point is
                        21° right now.
                    </div>
                </div>
            </div>
            <div className={styles.board}>
                <div className={styles.board__item}>
                    <div className={styles.board__title}>
                        <img className={styles.logo} src={logoVisibility} alt='img'/>
                        visibility
                    </div>
                    <div className={styles.board__visibility}>21 км</div>
                    <div className={styles.board__description}>Visibility is good</div>
                </div>
            </div>
        </div>
    )
}
export default WeatherBoards;