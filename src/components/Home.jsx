import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h1>Illegal Fishing Reporting Platform</h1>
        <Link to="/report">
          <button className="report-button">Report</button>
        </Link>
      </div>
      <div className="home-right">
        <div className="animation-placeholder"></div>
      </div>
    </div>
  );
};

export default Home;
