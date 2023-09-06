var apiKey="4870a4a0ba6f5d8c3e62e95e73b5b174";
var apiUrl="https://api.openweathermap.org/data/2.5/weather?&q=";
var search=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
var icon=document.querySelector(".weatherIcon");

async function weather (city)
{
    const response = await fetch(apiUrl + city+`&appid=${apiKey}`);
    var data= await response. json () ;
    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML= data.wind.speed+ " km/hr";
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp-273.15) +"°C";
    if(data.weather[0].main=="Clouds")
    {
        icon.src="clouds.png";
    }
    if(data.weather[0].main=="Clear")
    {
        icon.src="clear.png";
    }
    if(data.weather[0].main=="drizzle")
    {
        icon.src="drizzle.png";
    }
    if(data.weather[0].main=="Mist")
    {
        icon.src="mist.png";
    }
    if(data.weather[0].main=="rain")
    {
        icon.src="rain.png";
    }
    if(data.weather[0].main=="snow")
    {
        icon.src="snow.png";
    }
}
searchBtn.addEventListener("click", ()=>{weather(search.value)})
weather(); 
