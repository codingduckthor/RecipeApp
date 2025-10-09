import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = "39e3d136e6a7494cb190b31bbe4f4b6a";
  const API_URL = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.get(API_URL);
        setFilteredRecipes(response.data.recipes || []);
      } catch (error) {
        console.error("Ошибка при получении рецептов:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <main className="pt-6 px-6">
      {loading ? (
        <p className="text-center text-gray-500">Loading recipes...</p>
      ) : filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
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
