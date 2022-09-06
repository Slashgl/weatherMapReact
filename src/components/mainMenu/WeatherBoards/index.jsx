import React from 'react'
import Boards from './Boards'
import styles from './styles.module.scss'

const WeatherBoards = () => {
    return (
        <div className={styles.boards}>
            <Boards />
        </div>
    )
}

export default WeatherBoards
