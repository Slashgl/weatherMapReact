import React from 'react'
import styles from './styles.module.scss'
import video from '../../assets/img/bgVideo.mp4'

const BackgroundVideo = () => {
    return (
        <video className={styles.bgVideo} autoPlay loop muted>
            <source src={video}/>
        </video>
    )
}

export default BackgroundVideo