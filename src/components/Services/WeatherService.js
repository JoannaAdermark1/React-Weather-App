const API_KEY = "009c8f3fa030ee420577b00bd23de253";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL ( BASE_URL + "/ " + infoType);
    url.search = new URLSearchParams({...searchParams, appid:
    API_KEY});

    return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {

}

const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)

}