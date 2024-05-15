import { Link } from 'react-router-dom';
import { FaFish } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaFish size={30} />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
        <button className="sign-in-button">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
