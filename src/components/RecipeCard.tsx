import type { Recipe } from '../types/Recipe';
import './RecipeCard.css';

type RecipeCardProps = {
  recipe: Recipe;
  onClick: () => void;
};

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div className="RecipeCard" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="RecipeInfo">
        <h3>{recipe.name}</h3>
        <p className="RecipeMeta">
          ⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min &nbsp;·&nbsp; {recipe.difficulty}
        </p>
        <p className="RecipeMeta">
          ★ {recipe.rating} &nbsp;·&nbsp; {recipe.cuisine}
        </p>
      </div>
      <div className="RecipeCardRight">
        <span className="RecipeBadge">{recipe.mealType[0]}</span>
        <p className="RecipeMeta">{recipe.caloriesPerServing} kcal</p>
        <p className="RecipeMeta">{recipe.servings} servings</p>
      </div>
    </div>
  );
}
