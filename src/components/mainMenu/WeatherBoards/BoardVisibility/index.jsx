import React from 'react'
import {
    GetDescriptionVisibility,
    GetImgVisibility,
    GetNameVisibility,
    GetSignVisibility,
    GetVisibility,
} from 'store'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardVisibility = () => {
    const title = GetNameVisibility()
    const imgVisibility = GetImgVisibility()
    const visibility = GetVisibility()
    const signVisibility = GetSignVisibility()
    const descriptionVisibility = GetDescriptionVisibility()

    return (
        <Board title={title} imgSrc={imgVisibility}>
            <div className={styles.visibility}>
                {String(visibility).slice(0, 2)}
                {signVisibility}
            </div>
            <div className={styles.description}>{descriptionVisibility}</div>
        </Board>
    )
}

export default BoardVisibility
