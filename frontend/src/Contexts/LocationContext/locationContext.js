import React, { createContext, useContext, useReducer } from 'react';

/* State */
import initialState from './locationState.js';

/* Reducer */
import locationReducer from './locationReducer';

const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [locationState, locationDispatch] = useReducer(locationReducer, initialState);

  return (
    <LocationContext.Provider value={{locationState, locationDispatch}}>
      {props.children}
    </LocationContext.Provider>
  )
}

export const useLocationContext = () => useContext(LocationContext);
