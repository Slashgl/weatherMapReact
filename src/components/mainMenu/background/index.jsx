import React, { useEffect, useRef } from 'react'
import { changeBackground } from 'utils'
import { GetActiveIndex, GetCityList } from 'store'
import style from './styles.module.scss'

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
            className={style.backgroundMain}
            autoPlay
            loop
            muted
        >
            <source src={changeBackground(defaultData[activeIndex])} />
        </video>
    )
}

export default Background
