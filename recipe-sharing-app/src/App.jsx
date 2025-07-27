import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

export default function App() {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
}
