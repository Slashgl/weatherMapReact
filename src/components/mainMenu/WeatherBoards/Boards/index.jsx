import React from 'react'
import dayjs from 'dayjs'
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
import BoardsFooter from '../BoardsFooter'

const Boards = () => {
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

        boardFooter: [
            {
                board: 'FEELSLIKE',
                img: logoTemp,
                data: Math.floor(tempCurrent),
                description: `Similar to the actual temperature`,
                sign: `°`,
            },
            {
                board: 'HUMIDITY',
                img: logoHumidity,
                data: humidity,
                description: `The dew point is 21° right now.`,
                sign: '%',
            },
            {
                board: 'VISIBILITY',
                img: logoEye,
                data: String(visibility).slice(0, 2),
                description: `Visibility is good`,
                sign: ' км',
            },
        ],
    }

    return (
        <>
            <BoardIndex
                boards={nameBoards.boardUvi}
                imgSrc={nameBoards.imgUvi}
                uvi={nameBoards.uvi}
                level={nameBoards.level}
                description={nameBoards.descriptionUvi}
            />

            <BoardSunrise
                boards={nameBoards.boardSunrise}
                imgSrc={nameBoards.imgSunrise}
                sunrise={nameBoards.sunrise}
                time={nameBoards.time}
            />
            <BoardWind
                boards={nameBoards.boardWind}
                imgSrc={nameBoards.imgWind}
            />
            <BoardsFooter boardFooter={nameBoards.boardFooter} />
        </>
    )
}

export default Boards
