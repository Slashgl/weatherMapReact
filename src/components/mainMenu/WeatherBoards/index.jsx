import React from 'react'
import BoardsIndex from './BoardIndex'
import BoardsSunrise from './BoardSunrise'
import BoardsCompass from './BoardCompass'
import BoardFooter from './BoardFooter'
import styles from './styles.module.scss'

const WeatherBoards = ({ defaultData, activeIndex }) => {
    return (
        <div className={styles.boards}>
            {defaultData[activeIndex] ? (
                <>
                    <BoardsIndex
                        defaultData={defaultData}
                        activeIndex={activeIndex}
                    />
                    <BoardsSunrise
                        defaultData={defaultData}
                        activeIndex={activeIndex}
                    />
                    <BoardsCompass />

                    <BoardFooter
                        defaultData={defaultData}
                        activeIndex={activeIndex}
                    />
                </>
            ) : null}
        </div>
    )
}

export default WeatherBoards
