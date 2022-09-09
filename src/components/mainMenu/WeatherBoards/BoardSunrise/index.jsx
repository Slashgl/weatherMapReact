import React from 'react'
import Board from '../Boards/Board'
import { logoVector } from 'assets'
import styles from './styles.module.scss'

const BoardSunrise = ({ time, sunrise, imgSrc, boards }) => {
    return (
        <Board imgSrc={imgSrc} boards={boards}>
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
        </Board>
    )
}

export default BoardSunrise
