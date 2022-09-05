import React from 'react'
import Boards from './Boards'
import styles from './styles.module.scss'

const WeatherBoards = ({ defaultData, activeIndex }) => {
    return (
        <div className={styles.boards}>
            {defaultData[activeIndex] ? (
                <Boards
                    defaultData={defaultData}
                    activeIndex={activeIndex}
                />
            ) : null}
        </div>
    )
}

export default WeatherBoards
