import React, { useEffect, useRef } from 'react'
import { changeBackground } from 'utils'
import {GetActiveCity} from 'store'
import styles from './styles.module.scss'

const Background = () => {
    const activeCity = GetActiveCity()

    const videoRef = useRef()

    useEffect(() => {
        videoRef.current?.load()
    }, [activeCity])

    return (
        <video
            ref={videoRef}
            className={styles.backgroundMain}
            loop
            autoPlay
            muted
            controls={false}
        >
            <source src={changeBackground(activeCity)}/>
        </video>
    )
}

export default Background
