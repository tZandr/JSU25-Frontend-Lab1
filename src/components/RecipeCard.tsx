import type { Recipe } from "../types/Recipe";

type RecipeCardProps = {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <div className="RecipeCard">
            <h3>{recipe.name}</h3>
        </div>
    )
}
