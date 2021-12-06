import './Navbar.css';

// Components
import Location from '../Location/Location';

const Navbar = () => {
  return (
    <header className="navbar">
      <Location />
      <i className="fas fa-cog" />
    </header>
  );
}

export default Navbar;
