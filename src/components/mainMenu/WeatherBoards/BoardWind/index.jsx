import React from 'react'
import { GetImgCompass, GetImgWind, GetNameWind } from 'store'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardWind = () => {
    const title = GetNameWind()
    const imgSrc = GetImgWind()
    const imgCompass = GetImgCompass()

    return (
        <Board imgSrc={imgSrc} title={title}>
            <div className={styles.board__imgCompass}>
                <img
                    className={styles.board__compass}
                    src={imgCompass}
                    alt="img"
                />
            </div>
        </Board>
    )
}

export default BoardWind
