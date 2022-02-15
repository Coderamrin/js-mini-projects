const form = document.getElementById('form');
const formInput = document.getElementById('formInput');
const weatherGrid = document.querySelector('.weather-app__grid');
const token = config.MY_API_TOKEN;

//get the weather data
async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${token}`
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const weatherDataRaw = response.json();

  weatherDataRaw.then((weatherData) => {
    const data = {
      temp: weatherData.main.temp,
      icon: weatherData.weather[0].icon,
      description: weatherData.weather[0].description,
      name: weatherData.name,
    };

    //get the data and create a card
    createCard(data);
  });
}

//get the city name and add a card
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = formInput.value;

  //get the name to get the data
  weatherGrid.innerHTML = '';
  getWeather(cityName);
});

function createCard(data) {
  // card elements
  const card = document.createElement('div');
  const cityName = document.createElement('p');
  const weather = document.createElement('h2');
  const icon = document.createElement('div');
  const img = document.createElement('img');
  const description = document.createElement('p');

  card.classList.add('weather-app__card');
  cityName.classList.add('city');
  weather.classList.add('weather');
  icon.classList.add('icon');
  description.classList.add('description');

  cityName.textContent = data.name;
  weather.innerHTML = `${Math.round(data.temp)} &#8451;`;
  description.textContent = data.description;
  img.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${data.icon}@4x.png`
  );

  icon.appendChild(img);
  card.append(cityName, weather, icon, description);

  weatherGrid.prepend(card);
}

// default weather cards
getWeather('london');
getWeather('Dhaka');
getWeather('Jammu and Kashmir');
