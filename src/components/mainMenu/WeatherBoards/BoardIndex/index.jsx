import React from 'react'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardIndex = ({ uvi, level, title, imgSrc, description }) => {
    return (
        <Board imgSrc={imgSrc} title={title}>
            <div className={styles.board__index}>{uvi}</div>
            <div className={styles.board__level}>{level}</div>
            <div className={styles.board__lvlImg}>
                <span
                    className={styles.board__circle}
                    style={{
                        left: `${uvi}px`,
                    }}
                />
            </div>
            <div className={styles.board__description}>{description}</div>
        </Board>
    )
}

export default BoardIndex
