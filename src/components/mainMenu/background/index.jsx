import React, { useEffect, useRef } from 'react'
import { changeBackground } from 'utils'
import style from './styles.module.scss'

const Background = ({ city }) => {
    const videoRef = useRef()

    useEffect(() => {
        videoRef.current?.load()
    }, [city])

    return (
        <video
            ref={videoRef}
            className={style.backgroundMain}
            autoPlay
            loop
            muted
        >
            <source src={changeBackground(city)} />
        </video>
    )
}

export default Background
