import React from 'react'
import {
    GetDescriptionHumidity,
    GetHumidity,
    GetNameHumidity,
} from 'store'
import Board from '../Board'
import {logoHumidity} from 'assets'
import styles from './styles.module.scss'

const BoardHumidity = () => {
    const title = GetNameHumidity()
    const humidity = GetHumidity() || 45
    const descriptionHumidity = GetDescriptionHumidity()

    return (
        <Board title={title} imgSrc={logoHumidity}>
            <div className={styles.humidity}>
                {humidity}
                %
            </div>
            <div className={styles.description}>{descriptionHumidity}</div>
        </Board>
    )
}

export default BoardHumidity
