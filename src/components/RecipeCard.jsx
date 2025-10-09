import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-400 hover:scale-105 transform transition duration-300 flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {recipe.title}
          </h3>

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>🕒 {recipe.readyInMinutes} min</span>
            <span>🍽 {recipe.servings} servings</span>
          </div>
        </div>

        <Link
          to={`/recipe/${recipe.id}`}
          className="block mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 rounded-lg hover:opacity-90 transition"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
