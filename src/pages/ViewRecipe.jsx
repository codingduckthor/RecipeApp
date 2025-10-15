import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "39e3d136e6a7494cb190b31bbe4f4b6a";

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        setRecipe(res.data);
      } catch (error) {
        console.error("Error loading recipe:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-gray-500 text-xl animate-pulse">
          Loading...
        </p>
      </div>
    );

  if (!recipe)
    return (
      <p className="text-center text-gray-500 text-xl mt-10">
        Recipe not found
      </p>
    );

  return (
    <div className="flex items-start justify-center relative">
      {/* Кнопка "Назад" */}
      <button
        onClick={() => navigate(-1)}
        className="sticky top-1/2 transform -translate-y-1/2 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition"
      >
        ← Back
      </button>

      {/* Контейнер рецепта */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-amber-400 shadow-lg overflow-hidden p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">{recipe.title}</h2>
        <p className="text-gray-600 mt-2">
          Ready in {recipe.readyInMinutes} minutes • {recipe.servings} servings
        </p>

        <h3 className="text-xl font-semibold mt-6">Ingredients</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {recipe.extendedIngredients?.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6">Instructions</h3>
        <p
          className="text-gray-700 mt-2"
          dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        ></p>
      </div>
    </div>
  );
}

export default ViewRecipe;
