import React from 'react'
import video from '../../assets/video/bgVideo.mp4'

const BackgroundVideo = ({className,position, width, radius, height}) => {

    return (
        <video className={className}
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