import React from 'react'
import BoardIndex from './BoardIndex'
import BoardSunrise from './BoardSunrise'
import BoardWind from './BoardWind'
import BoardFeelsLike from './BoardFeelsLike'
import BoardHumidity from './BoardHumidity'
import BoardVisibility from './BoardVisibility'
import styles from './styles.module.scss'

const WeatherBoards = () => {
    return (
        <div className={styles.boards}>
            <BoardIndex />
            <BoardSunrise />
            <BoardWind />
            <BoardFeelsLike />
            <BoardHumidity />
            <BoardVisibility />
        </div>
    )
}

export default WeatherBoards
