import React from 'react'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardFeelsLike = ({
    title,
    imgFeelsLike,
    descriptionFeelsLike,
    signFeelsLike,
    temp,
}) => {
    return (
        <Board title={title} imgSrc={imgFeelsLike}>
            <div className={styles.degrees}>
                {temp}
                {signFeelsLike}
            </div>
            <div className={styles.description}>{descriptionFeelsLike}</div>
        </Board>
    )
}

export default BoardFeelsLike
