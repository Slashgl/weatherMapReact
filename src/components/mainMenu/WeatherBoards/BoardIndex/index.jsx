import React from 'react'
import {
    GetDescriptionUvi,
    GetLevelUvi,
    GetNameUvi,
    GetUvIndex,
} from 'store'
import Board from '../Board'
import {logoUiIndex} from 'assets'
import styles from './styles.module.scss'

const BoardIndex = () => {
    const nameUvi = GetNameUvi()
    const uvi = GetUvIndex() || 0
    const level = GetLevelUvi()
    const description = GetDescriptionUvi()

    return (
        <Board imgSrc={logoUiIndex} title={nameUvi}>
            <div className={styles.board__index}>{Math.floor(uvi)}</div>
            <div className={styles.board__level}>{level}</div>
            <div className={styles.board__lvlImg}>
                <span
                    className={styles.board__circle}
                    style={{ left: `${uvi}px` }}
                />
            </div>
            <div className={styles.board__description}>{description}</div>
        </Board>
    )
}

export default BoardIndex
