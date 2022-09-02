import React from 'react'
import { changeBackground } from 'utils'
import styles from './styles.module.scss'

const BackgroundCard = ({ city }) => {
    return (
        <video className={styles.background} width='100%' height='100%' muted loop autoPlay>
            <source src={changeBackground(city)}/>
        </video>
    )
}

export default BackgroundCard
