import React from 'react'
import Board from '../Board'
import styles from './styles.module.scss'

const BoardVisibility = ({
    title,
    imgVisibility,
    descriptionVisibility,
    signVisibility,
    visibility,
}) => {
    return (
        <Board title={title} imgSrc={imgVisibility}>
            <div className={styles.visibility}>
                {visibility}
                {signVisibility}
            </div>
            <div className={styles.description}>{descriptionVisibility}</div>
        </Board>
    )
}

export default BoardVisibility
