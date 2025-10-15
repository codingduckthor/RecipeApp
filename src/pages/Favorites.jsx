import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-gray-500 animate-pulse">
          No favorites yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Favorites</h2>
        <button
          onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      <div className="grid gap-4">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className="border p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <Link to={`/recipe/${recipe.id}`} className="text-lg font-semibold">
              {recipe.title}
            </Link>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FAVORITE", payload: recipe.id })
              }
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
