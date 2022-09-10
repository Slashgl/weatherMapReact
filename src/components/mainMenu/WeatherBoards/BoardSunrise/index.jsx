import React from 'react'
import { DateFormat } from 'utils'
import { GetImgSunrise, GetNameSunrise, GetSunrise, GetTime } from 'store'
import Board from '../Board'
import { logoVector } from 'assets'
import styles from './styles.module.scss'

const BoardSunrise = () => {
    const imgSrc = GetImgSunrise()
    const title = GetNameSunrise()
    const time = GetTime()
    const sunrise = GetSunrise()

    return (
        <Board imgSrc={imgSrc} title={title}>
            <div className={styles.board__time}>
                {DateFormat.formatTime(time)}
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
