import React from 'react'
import {
    GetDescriptionFeelsLike,
    GetNameFeelsLike,
    GetTempCurrent,
} from 'store'
import Board from '../Board'
import {logoTemp} from 'assets'
import styles from './styles.module.scss'

const BoardFeelsLike = () => {
    const title = GetNameFeelsLike()
    const temp = GetTempCurrent() || 10
    const descriptionFeelsLike = GetDescriptionFeelsLike()

    return (
        <Board title={title} imgSrc={logoTemp}>
            <div className={styles.degrees}>
                {Math.floor(temp)}
                &deg;
            </div>
            <div className={styles.description}>{descriptionFeelsLike}</div>
        </Board>
    )
}

export default BoardFeelsLike
