import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description.slice(0, 50)}...</p>
          </div>
        ))
      )}
      const isFavorite = favorites.includes(recipe.id);
      <button
        onClick={() => {
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id);
        }}
      >
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
    </div>
  );
}
