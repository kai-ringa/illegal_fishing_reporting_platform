import { Link } from 'react-router-dom';
import FishAnimation from './FishAnimation';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h1>Illegal Fishing Reporting Platform</h1>
        <p>
          Welcome to the Illegal Fishing Reporting Platform. This tool allows
          you to report incidents of illegal fishing in your area. By reporting
          these incidents, you help authorities take action to protect our
          marine resources and ecosystems.
        </p>
        <Link to="/report">
          <button className="report-button">Report</button>
        </Link>
      </div>
      <div className="home-right">
        <FishAnimation />
      </div>
    </div>
  );
};

export default Home;
