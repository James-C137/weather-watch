import './Location.css';
import React from 'react';

const Location = () => {
  const [locationInput, setLocationInput] = React.useState('');

  const handleLocationInputOnChange = (e) => {
    setLocationInput(e.target.value);
  }

  const handleLocationInputSubmit = (e) => {
    console.log(e);
  }

  return (
    <div className="location">
      <i className="fas fa-search" />
      <input
        type="text"
        placeholder="Location"
        value={locationInput}
        onChange={handleLocationInputOnChange}
        // onSubmit={handleLocationInputSubmit}
        onKeyDown={handleLocationInputSubmit}
      />
    </div>
  );
}

export default Location;
