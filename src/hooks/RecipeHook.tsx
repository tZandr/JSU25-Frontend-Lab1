import { useState, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';

export function useFetchRecipes() {
  const [data, setData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const json = await res.json();
        setData(json.recipes);
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading };
}
