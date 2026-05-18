import { useState } from 'react';
import type { Recipe } from '../types/Recipe';
import './RecipeModal.css';
import { updateRecipe } from '../hooks/RecipeHook';
import ErrorMessage from './ErrorMessage';

type RecipeModalProps = {
  recipe: Recipe;
  onClose: () => void;
  onDelete: (recipe: Recipe) => void;
  onEdit: (recipe: Recipe) => void;
};

export default function RecipeModal({ recipe, onClose, onDelete, onEdit }: RecipeModalProps) {
  const [edit, setEdit] = useState(false);
  const [draft, setDraft] = useState<Recipe>(recipe);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    try {
      await updateRecipe(draft);
      onEdit(draft);
      setEdit(false);
    } catch {
      setError('Failed to save changes. Please try again.');
    }
  }

  return (
    <div className="ModalBackdrop" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="ModalClose" onClick={onClose}>✕</button>
        {error && <ErrorMessage message={error} />}
        <img src={recipe.image} alt={recipe.name} />
        <div className="ModalHeader">
          <div>
            {edit
              ? <input value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} />
              : <h2>{recipe.name}</h2>
            }
            <p className="ModalMeta">
              {edit ? (
                <>
                  ⏱ <input type="number" value={draft.prepTimeMinutes} onChange={e => setDraft({ ...draft, prepTimeMinutes: + e.target.value })} />
                  {' + '}
                  <input type="number" value={draft.cookTimeMinutes} onChange={e => setDraft({ ...draft, cookTimeMinutes: +e.target.value })} />
                  {' min · '}
                  <input value={draft.difficulty} onChange={e => setDraft({ ...draft, difficulty: e.target.value })} />
                </>
              ) : (
                <>⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min &nbsp;·&nbsp; {recipe.difficulty} &nbsp;·&nbsp; ★ {recipe.rating}</>
              )}
            </p>
          </div>
          <div className="ModalEditButtons">
            {edit ? (
              <>
                <button id="edit-button" onClick={handleSave}>Save</button>
                <button id="delete-button" onClick={() => { setDraft(recipe); setEdit(false); }}>Cancel</button>
              </>
            ) : confirmDelete ? (
              <>
                <span className="DeletePrompt">Delete recipe?</span>
                <button id="delete-button" onClick={() => onDelete(recipe)}>Yes</button>
                <button id="edit-button" onClick={() => setConfirmDelete(false)}>No</button>
              </>
            ) : (
              <>
                <button id="edit-button" onClick={() => setEdit(true)}>Edit</button>
                <button id="delete-button" onClick={() => setConfirmDelete(true)}>Delete</button>
              </>
            )}
          </div>
        </div>
        <h3>Ingredients</h3>
        <ul>
          {draft.ingredients.map((item, i) => (
            <li key={i}>
              {edit
                ? <input value={item} onChange={e => {
                    const updated = [...draft.ingredients];
                    updated[i] = e.target.value;
                    setDraft({ ...draft, ingredients: updated });
                  }} />
                : item
              }
            </li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ol>
          {draft.instructions.map((step, i) => (
            <li key={i}>
              {edit
                ? <textarea value={step} onChange={e => {
                    const updated = [...draft.instructions];
                    updated[i] = e.target.value;
                    setDraft({ ...draft, instructions: updated });
                  }} />
                : step
              }
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
