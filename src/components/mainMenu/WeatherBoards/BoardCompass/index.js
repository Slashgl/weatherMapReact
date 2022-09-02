import React from 'react'
import Header from '../Header'
import { logoCompass, logoWind } from 'assets'
import styles from '../styles.module.scss'

const BoardsCompass = () => {
    return (
        <div className={styles.board}>
            <Header src={logoWind} name={`wind`} />
            <div className={styles.board__imgCompass}>
                <img
                    className={styles.board__compass}
                    src={logoCompass}
                    alt="img"
                />
            </div>
        </div>
    )
}

export default BoardsCompass
