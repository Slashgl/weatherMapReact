import React from 'react'
import Header from './Header'
import styles from './styles.module.scss'

const Board = ({ children, imgSrc, title }) => {

    return (
        <div className={styles.board}>
            <Header imgSrc={imgSrc} title={title} />
            {children}
        </div>
    )
}

export default Board
