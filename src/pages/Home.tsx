import { Link } from 'react-router-dom';
import '../App.css';
import searchIcon from '../assets/search_green.png';
import sortIcon from '../assets/sort_green.png';
import plusIcon from '../assets/plus_green.png';
import RecipeList from '../components/RecipeList';

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="headerButtons">
          <button>
            <img src={sortIcon} alt="Sort" />
          </button>
          <button>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <Link to="/new">
          <img src={plusIcon} alt="Add Recipe" />
        </Link>
      </div>
      <RecipeList />
    </div>
  );
}
