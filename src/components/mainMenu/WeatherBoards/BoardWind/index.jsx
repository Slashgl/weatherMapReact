import React from 'react'
import Board from '../Board'
import { logoCompass } from 'assets'
import styles from './styles.module.scss'

const BoardWind = ({ title, imgSrc }) => {
    return (
        <Board imgSrc={imgSrc} title={title}>
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
