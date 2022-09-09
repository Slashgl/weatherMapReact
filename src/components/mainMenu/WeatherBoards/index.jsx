import React from 'react'
import dayjs from 'dayjs'
import {
    GetHumidity,
    GetSunrise,
    GetTempCurrent,
    GetTime,
    GetUvIndex,
    GetVisibility,
} from 'store'
import BoardIndex from './BoardIndex'
import BoardSunrise from './BoardSunrise'
import BoardWind from './BoardWind'
import BoardFeelsLike from './BoardFeelsLike'
import {
    logoEye,
    logoHumidity,
    logoSunrise,
    logoTemp,
    logoUiIndex,
    logoWind,
} from 'assets'
import BoardHumidity from './BoardHumidity'
import BoardVisibility from './BoardVisibility'
import styles from './styles.module.scss'

const WeatherBoards = () => {
    const index = GetUvIndex()
    const sunrise = GetSunrise()
    const time = GetTime()
    const tempCurrent = GetTempCurrent()
    const humidity = GetHumidity()
    const visibility = GetVisibility()

    const nameBoards = {
        boardUvi: 'UV INDEX',
        imgUvi: logoUiIndex,
        uvi: Math.floor(index) || null,
        level: 'Middle',
        descriptionUvi: `Middle for the rest of the day.`,

        boardSunrise: 'SUNRISE',
        imgSunrise: logoSunrise,
        sunrise: dayjs.unix(sunrise).format('h:mm A'),
        time: dayjs.unix(time).format('h:mm A'),

        boardWind: 'WIND',
        imgWind: logoWind,

        boardFeelsLike: 'FEELSLIKE',
        imgFeelsLike: logoTemp,
        temp: Math.floor(tempCurrent),
        descriptionFeelsLike: `Similar to the actual temperature`,
        signFeelsLike: `°`,

        boardHumidity: 'HUMIDITY',
        imgHumidity: logoHumidity,
        humidity: humidity,
        descriptionHumidity: `The dew point is 21° right now.`,
        signHumidity: '%',

        boardVisibility: 'VISIBILITY',
        imgVisibility: logoEye,
        visibility: String(visibility).slice(0, 2),
        descriptionVisibility: `Visibility is good`,
        signVisibility: ' км',
    }

    return (
        <div className={styles.boards}>
            <BoardIndex
                title={nameBoards.boardUvi}
                imgSrc={nameBoards.imgUvi}
                uvi={nameBoards.uvi}
                level={nameBoards.level}
                description={nameBoards.descriptionUvi}
            />
            <BoardSunrise
                title={nameBoards.boardSunrise}
                imgSrc={nameBoards.imgSunrise}
                sunrise={nameBoards.sunrise}
                time={nameBoards.time}
            />
            <BoardWind
                title={nameBoards.boardWind}
                imgSrc={nameBoards.imgWind}
            />
            <BoardFeelsLike
                title={nameBoards.boardFeelsLike}
                imgFeelsLike={nameBoards.imgFeelsLike}
                temp={nameBoards.temp}
                descriptionFeelsLike={nameBoards.descriptionFeelsLike}
                signFeelsLike={nameBoards.signFeelsLike}
            />
            <BoardHumidity
                title={nameBoards.boardHumidity}
                imgHumidity={nameBoards.imgHumidity}
                humidity={nameBoards.humidity}
                descriptionHumidity={nameBoards.descriptionHumidity}
                signHumidity={nameBoards.signHumidity}
            />
            <BoardVisibility
                title={nameBoards.boardVisibility}
                imgVisibility={nameBoards.imgVisibility}
                visibility={nameBoards.visibility}
                descriptionVisibility={nameBoards.descriptionVisibility}
                signVisibility={nameBoards.signVisibility}
            />
        </div>
    )
}

export default WeatherBoards
