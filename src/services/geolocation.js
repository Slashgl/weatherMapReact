const apiKey = `f6c065f36d3bf94559470b07bcf0d80c`

const data = (link) => {
    fetch(link)
        .then(res => res.json)
        .then(res => res)
}

const geoFindMe = async () => {

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

       return data(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    }

    function error() {
       console.log('Невозможно получить ваше местоположение')
    }

    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером')
    } else {
        console.log('Определение местоположения…')
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
export default geoFindMe