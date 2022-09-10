import React from 'react'
import { DateFormat } from 'utils'
import { GetNameSunrise, GetSunrise, GetTime } from 'store'
import Board from '../Board'
import { logoVector,logoSunrise } from 'assets'
import styles from './styles.module.scss'

const BoardSunrise = () => {
    const title = GetNameSunrise()
    const time = GetTime() || 10
    const sunrise = GetSunrise() || 10

    return (
        <Board imgSrc={logoSunrise} title={title}>
            <div className={styles.board__time}>
                {time && DateFormat.formatTime(time)}
            </div>
            <div className={styles.board__imgVector}>
                <img
                    className={styles.board__vector}
                    src={logoVector}
                    alt="img"
                />
            </div>
            <div className={styles.board__sunrise}>
                Sunrise:
                {DateFormat.formatTime(sunrise)}
            </div>
        </Board>
    )
}

export default BoardSunrise
