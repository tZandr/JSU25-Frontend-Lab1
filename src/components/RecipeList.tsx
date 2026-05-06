import { useFetchRecipes } from '../hooks/RecipeHook';
import RecipeCard from './RecipeCard';

export default function RecipeList() {
  const recipes = useFetchRecipes();
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
