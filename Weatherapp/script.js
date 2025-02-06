const apiKey = "6bdc16ff01bff6950c2c0107d5c25e72";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".searchinput")
const sButton =document.querySelector(".searchbutton")
const changeimage=document.querySelector(".weatherimg")

async function checkweather(city) {
    const response = await fetch(apiUrl +city + `&appid=${apiKey}`)
    if(response.status==404){
        document.querySelector('.error').style.display="block";
    }else{

    
    var data = await response.json();

    
    document.querySelector("#place").innerHTML=data.name;
    document.querySelector("#degree").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector("#hum").innerHTML=data.main.humidity+" %";
    document.querySelector("#ws").innerHTML=data.wind.speed +" km/h";

    if(data.weather[0].main=="Mist"){
        changeimage.src="image/mis.png"
    }else if(data.weather[0].main=="Drizzle"){
        changeimage.src="image/weather.png"
    }else if(data.weather[0].main=="Rain"){
        changeimage.src="image/rain.png"
    } else if(data.weather[0].main=="Clouds"){
        changeimage.src="image/clouds.png"
        
    }else if(data.weather[0].main=="Clear"){
        changeimage.src="image/sunny.png"
    }

    document.querySelector('.error').style.display="none";
    document.querySelector(".weather").style.display="block";

    
    
    }
}


sButton.addEventListener("click",()=>{
    checkweather(searchBox.value);
   
})

