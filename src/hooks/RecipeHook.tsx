import { useState, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';

export function useFetchRecipes(prepend?: Recipe) {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const json = await res.json();
        setData(prepend ? [prepend, ...json.recipes] : json.recipes);
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, setData, loading };
}

export async function updateRecipe(updated: Recipe): Promise<Recipe> {
  const res = await fetch(`https://dummyjson.com/recipes/${updated.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  });
  return res.json();
}

export async function deleteRecipe(deleted: Recipe): Promise<void> {
  await fetch(`https://dummyjson.com/recipes/${deleted.id}`, {
    method: 'DELETE',
  });
  console.log(`Deleted recipe: ${deleted.name}`);
}

export async function createRecipe(newRecipe: Omit<Recipe, 'id'>): Promise<Recipe> {
  const res = await fetch('https://dummyjson.com/recipes/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRecipe),
  });
  return res.json();
}
