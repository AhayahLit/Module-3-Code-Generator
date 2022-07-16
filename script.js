document.querySelector("button")
.addEventListener("click", function (){
    var  = document.querySelector("input");
    console.log(searchValue.value);
    if (searchValue.value == "") { 
    alert("Please Enter a City");
    }  
    weather.fetchWeather(searchValue.value); 
})