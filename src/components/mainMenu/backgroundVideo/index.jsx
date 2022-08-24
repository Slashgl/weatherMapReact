import React from 'react'
import clear from "../../../assets/video/bgVideo.mp4"
import clouds from "../../../assets/video/Clouds.mp4"
import rain from "../../../assets/video/Rain.mp4"

const BackgroundVideo = ({className,position, width, radius, height, city}) => {

    const changeBackground = () => {
        const description = city?.backgroundDescription
        switch (description) {
            case 'Clear':
                return clear
            case 'Clouds':
                return clouds
            case 'Rain':
                return rain
            default:
                return clear
        }
    }

    return (
        <video className={className}
               style={{position: position, width: width, borderRadius: radius, height: height}}
               autoPlay
               loop
               muted
        >
            <source src={changeBackground()}/>
        </video>
    )
}

export default BackgroundVideo