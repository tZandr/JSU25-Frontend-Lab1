import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchRecipes, deleteRecipe } from '../hooks/RecipeHook';
import type { Recipe } from '../types/Recipe';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

type Props = {
  query: string;
  difficulty: string;
};

export default function RecipeList({ query, difficulty }: Props) {
  const location = useLocation();
  const newRecipe = location.state?.newRecipe as Recipe | undefined;
  const { data: recipes, setData: setRecipes, loading } = useFetchRecipes(newRecipe);
  const [selected, setSelected] = useState<Recipe | null>(null);

  const filtered = recipes.filter(r => {
    const matchesQuery = r.name.toLowerCase().includes(query.toLowerCase());
    const matchesDifficulty = difficulty === 'All' || r.difficulty === difficulty;
    return matchesQuery && matchesDifficulty;
  });

  async function handleDelete(recipe: Recipe) {
    await deleteRecipe(recipe);
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    setSelected(null);
  }

  function handleEdit(updated: Recipe) {
    setRecipes(prev => prev.map(r => r.id === updated.id ? updated : r));
    setSelected(updated);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="recipe-list">
      {filtered.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelected(recipe)} />
      ))}
      {selected && (
        <RecipeModal
          recipe={selected}
          onClose={() => setSelected(null)}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
