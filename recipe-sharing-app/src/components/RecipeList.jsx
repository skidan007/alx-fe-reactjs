import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description.slice(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
}
