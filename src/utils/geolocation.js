import {setCity} from "../store"

const geolocation = (dispatch) => {

    const getCoordsCurrent = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
            dispatch(setCity(latitude, longitude))
        }catch (e) {
            console.log(e)
        }
    }

    const error = () => {
        console.log('Невозможно получить ваше местоположение')
    }

    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером')
    } else {
        console.log('Определение местоположения…')

        navigator.geolocation.getCurrentPosition(getCoordsCurrent, error);
    }
}

export default geolocation