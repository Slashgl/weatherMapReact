import React from 'react'
import Header from '../Header'
import { logoUiIndex } from 'assets'
import styles from '../styles.module.scss'

const BoardsIndex = ({ defaultData, activeIndex }) => {
    return (
        <div className={styles.board}>
            <Header src={logoUiIndex} name={`uv index`} />
            <div className={styles.board__index}>
                {Math.round(defaultData[activeIndex]?.uvi)}
            </div>
            <div className={styles.board__level}>Middle</div>
            <div className={styles.board__lvlImg}>
                <span
                    className={styles.board__circle}
                    style={{
                        left: `${defaultData[activeIndex]?.uvi}px`,
                    }}
                ></span>
            </div>
            <div className={styles.board__description}>
                Middle for the rest of the day.
            </div>
        </div>
    )
}

export default BoardsIndex
