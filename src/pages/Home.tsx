import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import searchIcon from '../assets/search_green.png';
import sortIcon from '../assets/sort_green.png';
import plusIcon from '../assets/plus_green.png';
import RecipeList from '../components/RecipeList';
import SearchInput from '../components/SearchInput';
import Filter from '../components/Filter';

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState('All');

  return (
    <div>
      <div className="header">
        <div className="headerButtons">
          <button onClick={() => { setShowFilter(false); setShowSearch(s => !s); }}>
            <img src={searchIcon} alt="Search" />
          </button>
          <button onClick={() => { setShowSearch(false); setShowFilter(f => !f); }}>
            <img src={sortIcon} alt="Filter" />
          </button>
        </div>
        <Link to="/new">
          <img src={plusIcon} alt="Add Recipe" />
        </Link>
      </div>

      {showSearch && <SearchInput query={query} onChange={setQuery} />}
      {showFilter && <Filter difficulty={difficulty} onChange={setDifficulty} />}

      <RecipeList query={query} difficulty={difficulty} />
    </div>
  );
}
