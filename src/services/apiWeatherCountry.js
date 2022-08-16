const apiKey = `f6c065f36d3bf94559470b07bcf0d80c`

const apiWeatherCountry = async (lat, lon) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(res => res)
}

export default apiWeatherCountry