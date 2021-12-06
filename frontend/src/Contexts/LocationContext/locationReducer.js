/* Reducers */
import {
  setLocation,
} from './locationReducers.js';

const locationReducer = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SET_LOCATION':
      setLocation(newState, action.payload);
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
  return newState;
}

export default locationReducer;
