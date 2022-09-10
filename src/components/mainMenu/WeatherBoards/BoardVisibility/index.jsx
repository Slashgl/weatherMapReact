import React from 'react'
import {
    GetDescriptionVisibility,
    GetNameVisibility,
    GetVisibility,
} from 'store'
import Board from '../Board'
import {logoEye} from 'assets'
import styles from './styles.module.scss'

const BoardVisibility = () => {
    const title = GetNameVisibility()
    const visibility = GetVisibility() || 10
    const descriptionVisibility = GetDescriptionVisibility()

    return (
        <Board title={title} imgSrc={logoEye}>
            <div className={styles.visibility}>
                {String(visibility).slice(0, 2)}
                км
            </div>
            <div className={styles.description}>{descriptionVisibility}</div>
        </Board>
    )
}

export default BoardVisibility
