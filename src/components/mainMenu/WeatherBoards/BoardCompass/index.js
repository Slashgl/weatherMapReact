import React from 'react'
import Board from '../Board'
import Header from '../Header'
import { logoCompass, logoWind } from 'assets'
import styles from '../styles.module.scss'

const BoardsCompass = () => {
    return (
        <Board>
            <Header src={logoWind} name={`wind`} />
            <div className={styles.board__imgCompass}>
                <img
                    className={styles.board__compass}
                    src={logoCompass}
                    alt="img"
                />
            </div>
        </Board>
    )
}

export default BoardsCompass
