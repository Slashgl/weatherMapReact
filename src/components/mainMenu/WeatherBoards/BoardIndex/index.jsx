import React from 'react'
import styles from './styles.module.scss'

const BoardIndex = ({ uvi, level, boards }) => {
    return boards === 'UV INDEX' ? (
        <>
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
        </>
    ) : null
}

export default BoardIndex
