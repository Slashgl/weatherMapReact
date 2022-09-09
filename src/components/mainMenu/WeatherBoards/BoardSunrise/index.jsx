import React from 'react'
import dayjs from 'dayjs'
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
                {dayjs.unix(time).format('h:mm A')}
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
                {dayjs.unix(sunrise).format('h:mm A')}
            </div>
        </Board>
    )
}

export default BoardSunrise
