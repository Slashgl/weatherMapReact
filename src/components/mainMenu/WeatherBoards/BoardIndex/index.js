import React from 'react'
import Header from '../Header'
import Board from '../Board'
import { logoUiIndex } from 'assets'
import styles from '../styles.module.scss'

const BoardsIndex = ({ defaultData, activeIndex }) => {
    return (
        <Board>
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
        </Board>
    )
}

export default BoardsIndex
