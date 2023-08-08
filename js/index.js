let container=document.querySelector(".container_of_weather");
let second_day=document.querySelector(".second_day");
let third_day=document.querySelector(".third_day");
let collection=document.querySelector("section");
let list=document.querySelector(".list_icon");
let input_search=document.querySelector(".input");
let a=document.querySelectorAll("a");
let weather_api=new XMLHttpRequest();
let date=new Date();
let date_of_weeks=["saturday","sunday","monday","tuesday","wedenesday","thursday","friday"];
 function stop_liks()
{
    for(let i=0;i<a.length;i++)
    {
        a[i].addEventListener("click",(e)=>
        {
            e.preventDefault();
        })
    }
}
function date_generate(date_of_day)
{
let date=new Date();
date.setDate(date.getDay() +date_of_day);
return date.getDay();
}
function slicing_img(img_url)
{
    let final_link=img_url.split("/");
    let word="";
    let the_finl_array=[]
    for(let i=0;i<final_link.length;i++)
    {
        if(i===0)
        {
            the_finl_array.push("img");
            continue;
        }
        else if(i==1||i==2)
        {
            continue;
        }
        else
        {
           the_finl_array.push(final_link[i])
        }
    }
    return the_finl_array.join("/");
}
console.log("hello");
console.log(slicing_img("//cdn.weatherapi.com/weather/64x64/night/116.png"));
function define_city(city)
{
    let requeste=new XMLHttpRequest();
    requeste.open("get",`https://api.weatherapi.com/v1/forecast.json?key=df6250a15c49472599a153733230208&q=${city}&days=3`);
    requeste.send();
    requeste.onreadystatechange=function()
    {
        if(requeste.readyState==4)
        {
            let object_of_location=JSON.parse(requeste.responseText).location;
            let object_of_current=JSON.parse(requeste.responseText).current;
            let object_of_condition=JSON.parse(requeste.responseText).current.condition;
            let array_of_objectsfor_days=JSON.parse(this.responseText).forecast.forecastday;
           console.log(object_of_condition);
           console.log(object_of_current);
           console.log(object_of_location);
    console.log(array_of_objectsfor_days);
        display(object_of_location,object_of_current,object_of_condition,array_of_objectsfor_days);
        }
    }
}

let months={
   "0":"January",
   "1":"February",
   "2":"March",
   "3":"April",
   "4":"May",
   "5":"June",
   "6":"July",
   "7":"August",
   "8":"September",
   "9":"October",
   "10":"November",
   "11":"December",
}
function check_day(day)
{
    if(day>date_of_weeks.length)
    {
        return "saturday";

    }
    else{ 
        
    }
}
weather_api.open("get","https://api.weatherapi.com/v1/forecast.json?key=df6250a15c49472599a153733230208&q=london&days=3");
weather_api.send();
function display(object_location,object_current,object_of_condition,array_of_objectsfor_days)
{
let cartona1=``;

cartona1+=`<div class="the_first">
<p class="">${date_of_weeks[date_generate(0)]}</p>
<p class="">${date.getDate()}${months[date.getMonth(object_location.localtime)]}</p>
</div>
<div class="the_second">
<h3 class="">${object_location.name}</h3>
<h1 class="">${object_current.temp_c+"c"}</h1>
<img src="${slicing_img(object_of_condition.icon)}">
<h4>${object_of_condition.text}</h4>
</div>

<div class="four">
<div class="wind">
<img src="img/icon-umberella.png">
<p>${object_current.precip_in*1000}</p>
</div>
<div class="wind">
<img src="img/icon-wind.png">
    <p>${Math.round(object_current.wind_kph)}</p>
</div>
<div class="wind">
<img src="img/icon-compass.png">
<p>${object_current.wind_dir}</p>
</div>
</div>
`;
    
   

container.innerHTML=cartona1;
// the second day
let cartona_second_day=``;
cartona_second_day+=`
<div class="the_first_section">
<h3>${date_of_weeks[date_generate(1)]}</h3>

</div>
<div class="second_Section">
<img src="${slicing_img(array_of_objectsfor_days[1].day.condition.icon)}">
<h2>${array_of_objectsfor_days[1].day.maxtemp_c}</h2>
<h3>${array_of_objectsfor_days[1].day.mintemp_c}</h3>
<h2 id="ope">${array_of_objectsfor_days[1].day.condition.text}</h2>
</div>`;
second_day.innerHTML=cartona_second_day;
// the third day
let cartona3=``;
cartona3+=`
<div class="the_first_section">
<h3>${date_of_weeks[date_generate(2)]}</h3>

</div>
<div class="second_Section">
<img src="${slicing_img(array_of_objectsfor_days[2].day.condition.icon)}">
<h2>${array_of_objectsfor_days[2].day.maxtemp_c}</h2>
<h3>${array_of_objectsfor_days[2].day.mintemp_c}</h3>
<h2 id="opee">${array_of_objectsfor_days[2].day.condition.text}</h2>
</div>`;
third_day.innerHTML=cartona3;
console.log(date.getDay());
}
weather_api.onreadystatechange=function()
{
    if(weather_api.readyState==4)
    {
        let object_of_location=JSON.parse(weather_api.responseText).location;
        let object_of_current=JSON.parse(weather_api.responseText).current;
        let object_of_condition=JSON.parse(weather_api.responseText).current.condition;
        let array_of_objectsfor_days=JSON.parse(this.responseText).forecast.forecastday;
       console.log(object_of_condition);
       console.log(object_of_current);
       console.log(object_of_location);
console.log(array_of_objectsfor_days);
    display(object_of_location,object_of_current,object_of_condition,array_of_objectsfor_days);
    }
  
}
input_search.onkeyup=function()
{
let value=input_search.value;
define_city(value);
}
list.onclick=function()
{
   if(collection.style.display=="none")
   {
    collection.style.display="flex";
   }
   else{
    collection.style.display="none";
   }
}
window.setInterval(()=>
{
collection.style.display="none";
},8000);
stop_liks();
console.log(date_generate(2));