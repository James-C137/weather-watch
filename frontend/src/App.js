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
import Recommendations from './Components/Recommendations/Recommendations';
import Weather from './Components/Weather/Weather';

function App() {
  const [location, setLocation] = React.useState({});
  const [weatherData, setWeatherData] = React.useState({});
  const [recommendations, setRecommendations] = React.useState({});

  React.useEffect(() => {
    getLocationData();
  }, []);

  React.useEffect(() => {
    if (location.lat && location.lon) {
      getWeatherData();
    }
    // eslint-disable-next-line
  }, [location]);

  React.useEffect(() => {
    if (weatherData?.weather?.[0]?.id) {
      getRecommendations();
    }
    // eslint-disable-next-line
  }, [weatherData])

  const getLocationData = async () => {
    try {
      const url = `http://ip-api.com/json`;
      const response = await axios.get(url);
      setLocation(response.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const getWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${CONFIG['API_KEY']}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const getRecommendations = async () => {
    try {
      const url = `https://aq8pwxqnk8.execute-api.us-east-1.amazonaws.com/recommendations/${weatherData?.weather?.[0]?.id}`;
      const response = await axios.get(url);
      setRecommendations(response.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      className="app"
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <Weather weather={weatherData} />
      <Recommendations recommendations={recommendations}/>

      <Navbar />
    </div>
  );
}

export default App;
