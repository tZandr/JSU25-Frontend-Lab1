import { useState, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';

const API = import.meta.env.VITE_API_URL;

export function useFetchRecipes(prepend?: Recipe) {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API}/recipes`);
        const json = await res.json();
        setData(prepend ? [prepend, ...json.recipes] : json.recipes);
      } catch {
        setError('Failed to load recipes. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, setData, loading, error };
}

export async function updateRecipe(updated: Recipe): Promise<Recipe> {
  const res = await fetch(`${API}/recipes/${updated.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  });
  return res.json();
}

export async function deleteRecipe(deleted: Recipe): Promise<void> {
  await fetch(`${API}/recipes/${deleted.id}`, {
    method: 'DELETE',
  });
  console.log(`Deleted recipe: ${deleted.name}`);
}

export async function createRecipe(newRecipe: Omit<Recipe, 'id'>): Promise<Recipe> {
  const res = await fetch(`${API}/recipes/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRecipe),
  });
  return res.json();
}
