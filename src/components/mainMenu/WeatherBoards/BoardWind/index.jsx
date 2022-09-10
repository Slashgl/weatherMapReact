import React from 'react'
import { GetNameWind } from 'store'
import Board from '../Board'
import {logoWind, logoCompass} from 'assets'
import styles from './styles.module.scss'

const BoardWind = () => {
    const title = GetNameWind()

    return (
        <Board imgSrc={logoWind} title={title}>
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

export default BoardWind
