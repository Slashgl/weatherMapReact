import React from 'react'
import style from './styles.module.scss'
import {changeBackground} from "../../../utils/changeBackground";

const BackgroundVideo = ({city}) => {

    return (
        <video className={style.backgroundMain}
               autoPlay
               loop
               muted
        >
            <source src={changeBackground(city)}/>
        </video>
    )
}

export default BackgroundVideo