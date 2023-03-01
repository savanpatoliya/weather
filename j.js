// const API = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
const API_key = `12f40e20ac486ea02073eb79f6e62dca`;
// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const form = document.querySelector("form");
const weather = document.querySelector(".wheather");
const search = document.querySelector("#search");

const getWheather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const response = await fetch(url);  
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return showWheather(data);
}

const showWheather = (data)=>{
    if(data.cod == '404')
    {
        weather.innerHTML= `<h2>City Not Found</h2>`
    }
    else
    {
        weather.innerHTML= ` 
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="img">
        </div>
        <div>
            <h2>${data.main.temp} C</h2>
            <h4>${data.weather[0].main}</h4>
        </div>`;
    }
   
}
// console.log(getWheather());

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getWheather(search.value);
})
