import weatherIcon from 'assets/img/weatherIcon.svg'
import weatherIcon1 from 'assets/img/weatherIcon1.svg'
import weatherIcon2 from 'assets/img/weatherIcon2.svg'
import weatherIcon3 from 'assets/img/weatherIcon3.svg'

const weatherTodayApi = () => {
    const weatherTodayApi = [
        {time: 'Now', degrees: 10, icon: weatherIcon},
        {time: '10am', degrees: 5, icon: weatherIcon3},
        {time: '11am', degrees: 5, icon: weatherIcon},
        {time: '12aM', degrees: 6, icon: weatherIcon2},
        {time: '1pm', degrees: 32, icon: weatherIcon1},
        {time: '2pM', degrees: 54, icon: weatherIcon},
        {time: '3pm', degrees: 23, icon: weatherIcon3},
        {time: '4pm', degrees: 33, icon: weatherIcon2},
        {time: '5pm', degrees: 54, icon: weatherIcon1},
        {time: '6pm', degrees: 21, icon: weatherIcon},
    ]
    return weatherTodayApi
}
export default weatherTodayApi