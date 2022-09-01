import React from 'react'
import { changeBackground } from 'utils'
import style from './styles.module.scss'

const BackgroundCard = ({ city }) => {
    return (
        <video className={style.background} autoPlay loop muted>
            <source src={changeBackground(city)} />
        </video>
    )
}

export default BackgroundCard
