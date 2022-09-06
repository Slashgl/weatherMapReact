import React from 'react'
import { logoCompass } from 'assets'
import styles from './styles.module.scss'

const BoardWind = ({ boards }) => {
    return boards === 'WIND' ? (
        <div className={styles.board__imgCompass}>
            <img
                className={styles.board__compass}
                src={logoCompass}
                alt="img"
            />
        </div>
    ) : null
}

export default BoardWind
