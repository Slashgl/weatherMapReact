import React from 'react'
import { changeBackground } from 'utils'
import styles from './styles.module.scss'

const BackgroundCard = ({ city }) => {
    return (
        <>
            <video className={styles.background} width='100%' height='100%' poster={changeBackground(city)}>
            </video>
            <video className={styles.back} width='100%' height='100%'>
                <source src={changeBackground(city)}/>
            </video>
        </>
    )
}

export default BackgroundCard
