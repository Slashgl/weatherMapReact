import React from 'react'
import Header from './Header'
import styles from './styles.module.scss'

const Board = ({ children, imgSrc, boards }) => {

    return (
        <div className={styles.board}>
            <Header imgSrc={imgSrc} boards={boards} />
            {children}
        </div>
    )
}

export default Board
