import './Weather.css';

// Components
import InfoCard from '../InfoCard/InfoCard';

const kToC = (kelvin) => {
  if (!kelvin) return;
  return kelvin - 273.15;
}

const Weather = ({weather}) => {
  return (
    <InfoCard title='WEATHER'>
      <div className='weather'>
        <div className="temperature">
          <p className="temperature-value">{kToC(weather?.main?.temp)?.toFixed(0)}</p>
          <p className="temperature-symbol">°C</p>
        </div>
        <div className="weather-info">
          <img
            alt="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
            className="weather-icon"
          />
        </div>
      </div>
    </InfoCard>
  );
}

export default Weather;
