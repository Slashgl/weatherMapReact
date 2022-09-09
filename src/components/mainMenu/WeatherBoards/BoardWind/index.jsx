import React from 'react'
import Board from '../Boards/Board'
import { logoCompass } from 'assets'
import styles from './styles.module.scss'

const BoardWind = ({ boards, imgSrc }) => {
    return (
        <Board imgSrc={imgSrc} boards={boards}>
            <div className={styles.board__imgCompass}>
                <img
                    className={styles.board__compass}
                    src={logoCompass}
                    alt="img"
                />
            </div>
        </Board>
    )
}

export default BoardWind
