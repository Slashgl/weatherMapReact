import { videoClouds, videoRain, videoBg } from 'assets'

const changeBackground = (city) => {
    const description = city?.backgroundDescription

    switch (description) {
        case 'Clear':
            return videoBg
        case 'Clouds':
            return videoClouds
        case 'Rain':
            return videoRain
        default:
            return videoBg
    }
}

export default changeBackground
