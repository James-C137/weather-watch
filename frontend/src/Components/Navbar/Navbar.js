import './Navbar.css';

// Contexts
// import { useLocationContext } from '../../Contexts/LocationContext/locationContext';

// Components
import Location from '../Location/Location';

const Navbar = () => {
  // const { locationState } = useLocationContext();

  return (
    <header className="navbar">
      <Location />
      <i className="fas fa-cog" />
    </header>
  );
}

export default Navbar;
