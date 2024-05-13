const apiKey = "857fa934f689620b901a20d2367edd4c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weatherImage");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".main").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".feels").innerHTML = "Feels Like " + Math.round(data.main.feels_like) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML = data.sys.country;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Haze"){
            weatherImg.src = "images/haze.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherImg.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherImg.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherImg.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherImg.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weatherImg.src = "images/thunderstorm.png";
        }
        else if(data.weather[0].main == "Fog"){
            weatherImg.src = "images/fog.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherImg.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
