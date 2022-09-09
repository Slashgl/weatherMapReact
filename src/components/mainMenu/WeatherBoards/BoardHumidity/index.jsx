import React from 'react'
import {
    GetDescriptionHumidity,
    GetHumidity,
    GetImgHumidity,
    GetNameHumidity,
    GetSignHumidity,
} from 'store'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardHumidity = () => {
    const title = GetNameHumidity()
    const imgHumidity = GetImgHumidity()
    const humidity = GetHumidity()
    const signHumidity = GetSignHumidity()
    const descriptionHumidity = GetDescriptionHumidity()

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
