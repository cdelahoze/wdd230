
// select HTML elements in the document
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');

const currentSpeed = document.getElementById('wind');
const currentWind = document.getElementById('wind-ch');
const currentTempEl = document.getElementById('current-temp-forecast');
const weatherForecastEl = document.getElementById('weather-forecast');

const API_KEY ='35ddb02ed5c408d116ca4b5d96125809';
const latitude = 10.9639;
const longitude = -74.7964;


const url = 
(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
        displayResults(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch(url);


  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;

    const speed = weatherData.current.wind_speed;
    const tempC = weatherData.current.temp;
    const temp = (((tempC) * 9/5) + 32)
    let windChill;
    if (temp >= 50) {
        windChill = "NA";
    }
    if(speed < 3) { 
      windChill = "NA";}
   else {
        windChill = (Math.round((35.74 + (0.6215 * temp) - (35.75 * speed**0.16) + (0.4275 * temp * speed**0.16))*10))/10;
    }

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0];
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);


    currentSpeed.innerHTML = ` <strong>${speed}</strong> Km/h `;
    currentWind.innerHTML = ` <strong>${windChill}</strong> `;

    let otherDayForcast = ''
    weatherData.daily.forEach((day, idx) => {
        if(idx == 0){

          const dt = day.dt
          var sday = new Date(dt*1000)
          console.log(sday.toLocaleDateString("en-us", {weekday:"short"}))
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="other">
            <div class="day">${(sday.toLocaleDateString("en-us", {weekday:"short"}))}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>`

        }else{
          const dt = day.dt
          var sday = new Date(dt*1000)

          console.log(sday.toLocaleDateString("en-us", {weekday:"short"}))
            otherDayForcast += `
            <div class="weather-forecast-item">
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="day">${(sday.toLocaleDateString("en-us", {weekday:"short"}))}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;


    
  }

