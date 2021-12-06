import './App.css';
import React from 'react';

// Config
import CONFIG from './config';

// Assets
import bgImage from './img/sunny.jpg';

// Libraries
import axios from 'axios';

// Components
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [location, setLocation] = React.useState({});
  const [weatherData, setWeatherData] = React.useState({});

  console.log(location, weatherData);

  React.useEffect(() => {
    getLocationData();
  }, []);

  React.useEffect(() => {
    if (location.lat && location.lon) {
      getWeatherData();
    }
    // eslint-disable-next-line
  }, [location]);

  const getLocationData = async () => {
    let location = {};
    try {
      const url = `http://ip-api.com/json`;
      const response = await axios.get(url);
      location = response.data;
    }
    catch (e) {
      console.log(e);
    }
    setLocation(location);
  }

  const getWeatherData = async () => {
    let weatherData = {};
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${CONFIG['API_KEY']}`;
      const response = await axios.get(url);
      weatherData = response.data;
    }
    catch (e) {
      console.log(e);
    }
    setWeatherData(weatherData);
  }

  return (
    <div className="app" style={{backgroundImage: `url(${bgImage})`}}>
      <Navbar />
      <input type="button" value="Get Weather" onClick={getWeatherData} />
    </div>
  );
}

export default App;
