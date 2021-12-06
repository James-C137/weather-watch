import './App.css';
import React from 'react';

// Libraries
import axios from 'axios';

// Contexts
import { useLocationContext } from './Contexts/LocationContext/locationContext';

// Components
import Navbar from './Components/Navbar/Navbar';

// Assets
import sunny from './img/sunny.jpg';

function App() {
  const { locationDispatch } = useLocationContext();

  // Fetch location data
  React.useEffect(() => {
    const getLocationData = async () => {
      const response = await axios.get('https://geolocation-db.com/json');
      const location = response.data;
      console.log(response);
      locationDispatch({type: 'SET_LOCATION', payload: location});
    }
    getLocationData();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${sunny})`,
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
