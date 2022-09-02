import React from 'react'
import Header from '../Header'
import { logoEye, logoHumidity, logoTemp } from 'assets'
import styles from '../styles.module.scss'

const WeatherBoardsFooter = ({ defaultData, activeIndex }) => {
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
        nameBoards &&
        nameBoards?.map((el, index) => {
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
                                {String(el.data).slice(0, 2)}
                                {el.sign}
                            </div>
                            <div className={styles.board__description}>
                                {el.description}
                            </div>
                        </>
                    </div>
                )
            }
        })
    )
}

export default WeatherBoardsFooter
