import React from 'react'
import { changeBackground } from 'utils'
import styles from './styles.module.scss'

const Background = ({ city }) => {

    return window.screen.width <= 1140 ? (
        <video className={styles.background}>
            <source src={changeBackground(city)}/>
        </video>
    ) : (
        <video
            className={styles.background}
            autoPlay
            muted
            loop
        >
            <source src={changeBackground(city)}/>
        </video>
    )
}

export default Background
