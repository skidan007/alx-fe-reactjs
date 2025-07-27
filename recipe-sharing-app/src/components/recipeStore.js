import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  favorites: [],
  recommendations: [],

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addFavorite: (id) => {
    const state = get();
    if (!state.favorites.includes(id)) {
      set({ favorites: [...state.favorites, id] });
      get().generateRecommendations();
    }
  },

  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    }));
    get().generateRecommendations();
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && // not already favorited
        favorites.some((favId) =>
          recipe.title
            .toLowerCase()
            .includes(
              recipes.find((r) => r.id === favId)?.title.split(' ')[0]?.toLowerCase() || ''
            )
        )
    );
    set({ recommendations: recommended.slice(0, 5) }); // limit recommendations
  },
}));
