
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const currentSpeed = document.querySelector('#wind');
const currentWind = document.querySelector('#wind-ch');

const url = 
'https://api.openweathermap.org/data/2.5/weather?q=Facatativa&units=Metric&appid=35ddb02ed5c408d116ca4b5d96125809';

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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const speed = weatherData.wind.speed;
    const tempC =weatherData.main.temp;
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


  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    currentSpeed.innerHTML = ` <strong>${speed}</strong> Km/h `;
    currentWind.innerHTML = ` <strong>${windChill}</strong> `;
  }

