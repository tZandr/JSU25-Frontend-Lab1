import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe } from '../hooks/RecipeHook';
import '../pages/RecipeCreate.css';

export default function RecipeForm() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState({
    name: '',
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: '',
    cuisine: '',
    caloriesPerServing: 0,
    ingredients: [''],
    instructions: [''],
    tags: [],
    mealType: [],
    image: '',
    rating: 0,
  });

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let newRecipe;
    try {
      newRecipe = await createRecipe(draft);
      console.log('API response:', newRecipe);
    } catch (error) {
      console.error('Failed to create recipe:', error);
    }
    const recipeToAdd = newRecipe ?? { ...draft, id: Date.now() };
    navigate('/', { state: { newRecipe: recipeToAdd } });
  }

  function updateListItem(field: 'ingredients' | 'instructions', index: number, value: string) {
    const updated = [...draft[field]];
    updated[index] = value;
    setDraft({ ...draft, [field]: updated });
  }

  function addListItem(field: 'ingredients' | 'instructions') {
    setDraft({ ...draft, [field]: [...draft[field], ''] });
  }

  return (
    <form className="CreateForm" onSubmit={handleSubmit}>
      <label>Name
        <input value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} required />
      </label>

      <div className="CreateRow">
        <label>Prep time (min)
          <input type="number" value={draft.prepTimeMinutes} onChange={e => setDraft({ ...draft, prepTimeMinutes: +e.target.value })} />
        </label>
        <label>Cook time (min)
          <input type="number" value={draft.cookTimeMinutes} onChange={e => setDraft({ ...draft, cookTimeMinutes: +e.target.value })} />
        </label>
      </div>

      <div className="CreateRow">
        <label>Difficulty
          <input value={draft.difficulty} onChange={e => setDraft({ ...draft, difficulty: e.target.value })} />
        </label>
        <label>Cuisine
          <input value={draft.cuisine} onChange={e => setDraft({ ...draft, cuisine: e.target.value })} />
        </label>
      </div>

      <label>Servings
        <input type="number" value={draft.servings} onChange={e => setDraft({ ...draft, servings: +e.target.value })} />
      </label>

      <label>Image URL
        <input type="url" value={draft.image} placeholder="https://..." onChange={e => setDraft({ ...draft, image: e.target.value })} />
      </label>
      {draft.image && <img src={draft.image} alt="Preview" className="ImagePreview" />}

      <label>Ingredients</label>
      {draft.ingredients.map((item, i) => (
        <input key={i} value={item} placeholder={`Ingredient ${i + 1}`}
          onChange={e => updateListItem('ingredients', i, e.target.value)} />
      ))}
      <button type="button" className="AddItemButton" onClick={() => addListItem('ingredients')}>+ Add ingredient</button>

      <label>Instructions</label>
      {draft.instructions.map((step, i) => (
        <textarea key={i} value={step} placeholder={`Step ${i + 1}`}
          onChange={e => updateListItem('instructions', i, e.target.value)} />
      ))}
      <button type="button" className="AddItemButton" onClick={() => addListItem('instructions')}>+ Add step</button>

      <button type="submit" className="SubmitButton">Save Recipe</button>
    </form>
  );
}
