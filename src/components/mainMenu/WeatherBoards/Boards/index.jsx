import React from 'react'
import dayjs from 'dayjs'
import Board from '../Board'
import {
    logoEye,
    logoHumidity,
    logoSunrise,
    logoTemp,
    logoUiIndex,
    logoWind,
} from 'assets'
import {
    GetHumidity,
    GetSunrise,
    GetTempCurrent,
    GetTime,
    GetUvIndex,
    GetVisibility,
} from 'store'
import BoardIndex from '../BoardIndex'
import BoardSunrise from '../BoardSunrise'
import BoardWind from '../BoardWind'
import styles from './styles.module.scss'

const Boards = () => {
    const index = GetUvIndex()
    const sunrise = GetSunrise()
    const time = GetTime()
    const tempCurrent = GetTempCurrent()
    const humidity = GetHumidity()
    const visibility = GetVisibility()

    const nameBoards = [
        {
            boards: 'UV INDEX',
            uvi: Math.floor(index),
            level: 'Middle',
            img: logoUiIndex,
            description: `Middle for the rest of the day.`,
            id: 0,
        },
        {
            boards: 'SUNRISE',
            sunrise: dayjs.unix(sunrise).format('h:mm A'),
            time: dayjs.unix(time).format('h:mm A'),
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
            data: Math.floor(tempCurrent),
            img: logoTemp,
            description: `Similar to the actual temperature`,
            sign: `°`,
            id: 3,
        },
        {
            boards: 'HUMIDITY',
            data: humidity,
            img: logoHumidity,
            description: `The dew point is 21° right now.`,
            sign: '%',
            id: 4,
        },
        {
            boards: 'VISIBILITY',
            data: String(visibility).slice(0, 2),
            img: logoEye,
            description: `Visibility is good`,
            sign: ' км',
            id: 5,
        },
    ]

    return nameBoards?.map((el, index) => (
        <Board key={index} imgSrc={el.img} boards={el.boards}>
            <BoardIndex uvi={el.uvi} level={el.level} boards={el.boards} />
            <BoardSunrise
                sunrise={el.sunrise}
                time={el.time}
                boards={el.boards}
            />
            <BoardWind boards={el.boards} img={el.img} />
            <div className={styles.board__degrees}>
                {el.data}
                {el.sign}
            </div>
            <div className={styles.board__description}>{el.description}</div>
        </Board>
    ))
}

export default Boards
