import weatherIcon from 'assets/img/weatherIcon.svg'
import weatherIcon1 from 'assets/img/weatherIcon1.svg'
import weatherIcon2 from 'assets/img/weatherIcon2.svg'
import weatherIcon3 from 'assets/img/weatherIcon3.svg'

const forecastApi = () => {
    const api = [
        {day: 'Mon', min: 18, max: 27, id: 1, icon: weatherIcon},
        {day: 'Tue', min: 4, max: 32, id: 2, icon: weatherIcon1},
        {day: 'Wed', min: 5, max: 54, id: 3, icon: weatherIcon2},
        {day: 'Thu', min: 34, max: 45, id: 4, icon: weatherIcon3},
        {day: 'Fri', min: 23, max: 32, id: 5, icon: weatherIcon1},
        {day: 'Sat', min: 12, max: 34, id: 6, icon: weatherIcon3},
        {day: 'Sun', min: 43, max: 54, id: 7, icon: weatherIcon},
        {day: 'Mon', min: 18, max: 27, id: 8, icon: weatherIcon3},
        {day: 'Tue', min: 4, max: 32, id: 9, icon: weatherIcon3},
        {day: 'Wed', min: 5, max: 54, id: 10, icon: weatherIcon2},
    ]
    return api
}

export default forecastApi