import clear from '../assets/video/bgVideo.mp4'
import clouds from '../assets/video/Clouds.mp4'
import rain from '../assets/video/Rain.mp4'

export const changeBackground = (city) => {
    const description = city?.backgroundDescription
    console.log(description)
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
