import React from 'react'
import Board from '../Boards/Board'
import styles from './styles.module.scss'

const BoardsFooter = ({ boardFooter }) => {
    return boardFooter.map((board, index) => (
        <Board key={index} boards={board.board} imgSrc={board.img}>
            <div className={styles.degrees}>
                {board?.data}
                {board.sign}
            </div>
            <div className={styles.description}>{board.description}</div>
        </Board>
    ))
}

export default BoardsFooter
