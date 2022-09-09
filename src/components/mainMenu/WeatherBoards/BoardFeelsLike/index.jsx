import React from 'react'
import {
    GetDescriptionFeelsLike,
    GetImgFeelsLike,
    GetNameFeelsLike,
    GetSignFeelsLike,
    GetTempCurrent,
} from 'store'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardFeelsLike = () => {
    const title = GetNameFeelsLike()
    const imgFeelsLike = GetImgFeelsLike()
    const temp = GetTempCurrent()
    const descriptionFeelsLike = GetDescriptionFeelsLike()
    const signFeelsLike = GetSignFeelsLike()

    return (
        <Board title={title} imgSrc={imgFeelsLike}>
            <div className={styles.degrees}>
                {Math.floor(temp)}
                {signFeelsLike}
            </div>
            <div className={styles.description}>{descriptionFeelsLike}</div>
        </Board>
    )
}

export default BoardFeelsLike
