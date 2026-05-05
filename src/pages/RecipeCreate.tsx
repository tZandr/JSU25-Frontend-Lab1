import { Link } from 'react-router-dom';
import '../App.css';
import backIcon from '../assets/back_green.png';

export default function Home() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={backIcon} alt="Add Recipe" />
        </Link>
      </div>
      <div></div>
    </div>
  );
}
