import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
        <nav>
          <Link to="/">Home and Recipes</Link>
          <Link to="/recipes">Recipe List</Link>
          <Link to="/recipes/new">Add Recipe</Link>
        </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
