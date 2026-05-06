import { useFetchRecipes } from '../hooks/RecipeHook';
import RecipeCard from './RecipeCard';

export default function RecipeList() {
  const { data: recipes, loading } = useFetchRecipes();
  if (loading === true) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}
