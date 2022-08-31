import React from 'react'
import dayjs from 'dayjs'
import logoSunrise  from 'assets/img/sunrise.fill.svg'
import logoWind from 'assets/img/wind.svg'
import logoVector from 'assets/img/Vector.svg'
import logoUiIndex from 'assets/img/sun.max.fill.svg'
import logoCompass from 'assets/img/compass.svg'
import logoHumidity from 'assets/img/humidity.svg'
import logoTemp from 'assets/img/thermometer.svg'
import logoEye from 'assets/img/eye.fill.svg'
import styles from './styles.module.scss'
import Header from './Header'

const WeatherBoards = ({ defaultData, activeIndex }) => {
    const nameBoards = [
        {
            boards: 'FEELSLIKE',
            data: defaultData[activeIndex]?.tempCurrent,
            img: logoTemp,
            description: `Similar to the actual temperature`,
            sign: `°`,
        },
        {
            boards: 'HUMIDITY',
            data: defaultData[activeIndex]?.humidity,
            img: logoHumidity,
            description: `The dew point is 21° right now.`,
            sign: '%',
        },
        {
            boards: 'VISIBILITY',
            data: defaultData[activeIndex]?.visibility,
            img: logoEye,
            description: `Visibility is good`,
            sign: ' км',
        },
    ]

    return (
        <div className={styles.boards}>
            <div className={styles.board}>
                <Header src={logoUiIndex} name={`uv index`}/>
                <div className={styles.board__index}>
                    {Math.round(defaultData[activeIndex]?.uvi)}
                </div>
                <div className={styles.board__level}>Middle</div>
                <div className={styles.board__lvlImg}>
                    <span
                        className={styles.board__circle}
                        style={{
                            left: `${defaultData[activeIndex]?.uvi}px`,
                        }}
                    ></span>
                </div>
                <div className={styles.board__description}>
                    Middle for the rest of the day.
                </div>
            </div>
            <div className={styles.board}>
                <Header src={logoSunrise} name={`sunrise`}/>
                <div className={styles.board__time}>
                    {dayjs
                        .unix(defaultData[activeIndex]?.time)
                        .format('hh:mm A')}
                </div>
                <div className={styles.board__imgVector}>
                    <img
                        className={styles.board__vector}
                        src={logoVector}
                        alt="img"
                    />
                </div>
                <div className={styles.board__description}>
                    Sunrise:{' '}
                    {dayjs
                        .unix(defaultData[activeIndex]?.sunrise)
                        .format('hh:mm A')}
                </div>
            </div>
            <div className={styles.board}>
                <Header src={logoWind} name={`wind`}/>
                <div className={styles.board__imgCompass}>
                    <img
                        className={styles.board__compass}
                        src={logoCompass}
                        alt="img"
                    />
                </div>
            </div>
            {nameBoards?.map((el, index) => {
                if (
                    el.boards === 'HUMIDITY' ||
                    el.boards === 'FEELSLIKE' ||
                    el.boards === 'VISIBILITY'
                ) {
                    return (
                        <div key={index} className={styles.board}>
                            <>
                                <Header src={el.img} name={el.boards} />
                                <div className={styles.board__percent}>
                                    {Math.round(el.data)}
                                    {el.sign}
                                </div>
                                <div className={styles.board__description}>
                                    {el.description}
                                </div>
                            </>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default WeatherBoards
