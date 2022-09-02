import React from 'react'
import styles from '../styles.module.scss'

const Board = ({ children }) => {
    return (
        <div className={styles.board}>
            {children}
        </div>
    )
}

export default Board
