import React from 'react'
import {
    GetDescriptionUvi,
    GetImgUvi,
    GetLevelUvi,
    GetNameUvi,
    GetUvIndex,
} from 'store'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardIndex = () => {
    const nameUvi = GetNameUvi()
    const imgUvi = GetImgUvi()
    const uvi = GetUvIndex()
    const level = GetLevelUvi()
    const description = GetDescriptionUvi()

    return (
        <Board imgSrc={imgUvi} title={nameUvi}>
            <div className={styles.board__index}>{Math.floor(uvi)}</div>
            <div className={styles.board__level}>{level}</div>
            <div className={styles.board__lvlImg}>
                <span
                    className={styles.board__circle}
                    style={{
                        left: `${uvi}px`,
                    }}
                />
            </div>
            <div className={styles.board__description}>{description}</div>
        </Board>
    )
}

export default BoardIndex
