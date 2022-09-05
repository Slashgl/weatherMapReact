import React from 'react'
import styles from './styles.module.scss'
import Header from "../Header";

const Board = ({ children, imgSrc, boards }) => {
    return (
        <div className={styles.board}>
            <Header imgSrc={imgSrc} boards={boards}/>
            {children}
        </div>
    )
}

export default Board
