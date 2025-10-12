import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "39e3d136e6a7494cb190b31bbe4f4b6a";
  const API_URL = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY}`;

  const fetchRecipes = async (searchQuery = "") => {
    setLoading(true);
    try {
      const url = searchQuery
        ? `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=9&apiKey=${API_KEY}`
        : `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY}`;
      const res = await axios.get(url);
      const data = res.data.results || res.data.recipes;
      setRecipes(data);
    } catch (error) {
      console.error("Error loading recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(query);
  };

  return (
    <main className="pt-24 px-6">
      <form onSubmit={handleSearch} className="flex justify-center mb-8 gap-2">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-orange-600 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-500 animate-pulse">
            Loading recipes...
          </p>
        </div>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No recipes found</p>
      )}
    </main>
  );
}

export default Recipes;
