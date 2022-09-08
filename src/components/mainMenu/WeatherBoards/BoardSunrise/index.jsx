import React from 'react'
import { logoVector } from 'assets'
import styles from './styles.module.scss'

const BoardSunrise = ({ time, sunrise, boards }) => {

    return boards === 'SUNRISE' ? (
        <>
            <div className={styles.board__time}>{time}</div>
            <div className={styles.board__imgVector}>
                <img
                    className={styles.board__vector}
                    src={logoVector}
                    alt="img"
                />
            </div>
            <div className={styles.board__sunrise}>
                Sunrise:
                {sunrise}
            </div>
        </>
    ) : null
}

export default BoardSunrise
