import React from 'react'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardHumidity = ({
    title,
    imgHumidity,
    descriptionHumidity,
    signHumidity,
    humidity,
}) => {
    return (
        <Board title={title} imgSrc={imgHumidity}>
            <div className={styles.humidity}>
                {humidity}
                {signHumidity}
            </div>
            <div className={styles.description}>{descriptionHumidity}</div>
        </Board>
    )
}

export default BoardHumidity
