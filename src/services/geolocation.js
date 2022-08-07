import Api from "./api";

const geoFindMe = () => {
    async function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f6c065f36d3bf94559470b07bcf0d80c&units=metric`;

    }

    function error() {
        console.log('Unable to retrieve your location')
    }

    if(!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser')
    } else {
        console.log('Locating…')
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

export default geoFindMe
