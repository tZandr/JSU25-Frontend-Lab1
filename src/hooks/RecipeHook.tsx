import { useState, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';

export function useFetchRecipes() {
  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const json = await res.json();
        setData(json.recipes);
      } catch (error) {
        console.error('Error: ', error);
      }
    }
    fetchData();
  }, []);

  return data;
}
