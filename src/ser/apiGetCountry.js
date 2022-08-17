
const apiKey = `f6c065f36d3bf94559470b07bcf0d80c`





const apiGetCountry = async (valueInput) => {

    return await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${valueInput}&limit=5&appid=${apiKey}`)
        .then(res => res.json())
        .then(res => res)
}

export default apiGetCountry