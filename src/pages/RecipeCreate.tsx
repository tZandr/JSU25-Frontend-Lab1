import { Link } from 'react-router-dom';
import '../App.css';
import backIcon from '../assets/back_green.png';
import RecipeForm from '../components/RecipeForm';

export default function RecipeCreate() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={backIcon} alt="Back" />
        </Link>
        <h2>New Recipe</h2>
        <div style={{ width: 24 }} />
      </div>
      <RecipeForm />
    </div>
  );
}
