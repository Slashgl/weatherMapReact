import React from 'react'
import styles from './styles.module.scss'
import video from '../../assets/video/bgVideo.mp4'

const BackgroundVideo = ({position, width, radius, height}) => {

    return (
        <video className={styles.bgVideo}
               style={{position: position, width: width, borderRadius: radius, height: height}}
               autoPlay
               loop
               muted
        >
            <source src={video}/>
        </video>
    )
}

export default BackgroundVideo