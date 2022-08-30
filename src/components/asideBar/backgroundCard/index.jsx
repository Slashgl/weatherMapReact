import React from 'react'
import style from './styles.module.scss'
import { changeBackground } from 'utils/changeBackground'

const BackgroundCard = ({ city }) => {
    return (
        <video className={style.background} autoPlay loop muted>
            <source src={changeBackground(city)} />
        </video>
    )
}

export default BackgroundCard
