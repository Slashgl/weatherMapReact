import React, { useEffect, useRef } from 'react'
import { changeBackground } from 'utils'
import { GetActiveIndex, GetCityList } from 'store'
import styles from './styles.module.scss'

const Background = () => {
    const defaultData = GetCityList()
    const activeIndex = GetActiveIndex()

    const videoRef = useRef()

    useEffect(() => {
        videoRef.current?.load()
    }, [defaultData[activeIndex]])

    return (
        <video
            ref={videoRef}
            className={styles.backgroundMain}
            loop
            autoPlay
            muted
        >
            <source src={changeBackground(defaultData[activeIndex])}/>
        </video>
    )
}

export default Background
