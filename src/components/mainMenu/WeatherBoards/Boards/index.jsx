import React from 'react'
import dayjs from 'dayjs'
import Board from '../Board'
import {
    logoCompass,
    logoEye,
    logoHumidity,
    logoSunrise,
    logoTemp,
    logoUiIndex,
    logoVector,
    logoWind,
} from 'assets'
import styles from './styles.module.scss'

const Boards = ({ defaultData, activeIndex }) => {
    const nameBoards = [
        {
            boards: 'UV INDEX',
            uvi: Math.floor(defaultData[activeIndex].uvi),
            level: 'Middle',
            img: logoUiIndex,
            description: `Middle for the rest of the day.`,
            id: 0,
        },
        {
            boards: 'SUNRISE',
            sunrise: dayjs
                .unix(defaultData[activeIndex]?.sunrise)
                .format('h:mm A'),
            time: dayjs.unix(defaultData[activeIndex]?.time).format('h:mm A'),
            img: logoSunrise,
            id: 1,
        },
        {
            boards: 'WIND',
            img: logoWind,
            id: 2,
        },
        {
            boards: 'FEELSLIKE',
            data: Math.floor(defaultData[activeIndex]?.tempCurrent),
            img: logoTemp,
            description: `Similar to the actual temperature`,
            sign: `°`,
            id: 3,
        },
        {
            boards: 'HUMIDITY',
            data: defaultData[activeIndex]?.humidity,
            img: logoHumidity,
            description: `The dew point is 21° right now.`,
            sign: '%',
            id: 4,
        },
        {
            boards: 'VISIBILITY',
            data: String(defaultData[activeIndex]?.visibility).slice(0, 2),
            img: logoEye,
            description: `Visibility is good`,
            sign: ' км',
            id: 5,
        },
    ]

    return (
        nameBoards &&
        nameBoards?.map((el, index) => {
            if (el.id === index) {
                return (
                    <Board key={index} imgSrc={el.img} boards={el.boards}>
                        <div className={styles.board__index}>{el.uvi}</div>
                        {el.boards === 'UV INDEX' ? (
                            <>
                                <div className={styles.board__level}>
                                    {el.level}
                                </div>
                                <div className={styles.board__lvlImg}>
                                    <span
                                        className={styles.board__circle}
                                        style={{
                                            left: `${defaultData[activeIndex]?.uvi}px`,
                                        }}
                                    />
                                </div>
                            </>
                        ) : null}
                        <div className={styles.board__time}>{el.time}</div>
                        {el.boards === 'SUNRISE' ? (
                            <>
                                <div className={styles.board__imgVector}>
                                    <img
                                        className={styles.board__vector}
                                        src={logoVector}
                                        alt="img"
                                    />
                                </div>
                                <div className={styles.board__sunrise}>
                                    Sunrise:
                                    {el.sunrise}
                                </div>
                            </>
                        ) : null}
                        {el.boards === 'WIND' ? (
                            <div className={styles.board__imgCompass}>
                                <img
                                    className={styles.board__compass}
                                    src={logoCompass}
                                    alt="img"
                                />
                            </div>
                        ) : null}
                        <div className={styles.board__degrees}>
                            {el.data}
                            {el.sign}
                        </div>
                        <div className={styles.board__description}>
                            {el.description}
                        </div>
                    </Board>
                )
            }
        })
    )
}

export default Boards
