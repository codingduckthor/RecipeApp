function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <p className="text-lg text-gray-700 max-w-2xl mt-4">
        The <span className="font-semibold">Recipe Finder</span> app was created
        for educational purposes and demonstrates how to work with external
        APIs, state management, and routing in React.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Features:
      </h2>
      <ul className="text-left text-gray-700 list-disc list-inside max-w-xl">
        <li>Search recipes by name or ingredient</li>
        <li>View recipe description and ingredients</li>
        <li>Add recipes to favorites</li>
        <li>Store favorite recipes locally</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Technologies Used:
      </h2>
      <ul className="text-left text-gray-700 list-disc list-inside max-w-xl">
        <li>
          <strong>React</strong> — for building the user interface
        </li>
        <li>
          <strong>Redux</strong> — for managing global state (favorites)
        </li>
        <li>
          <strong>Tailwind CSS</strong> — for styling and responsive layout
        </li>
        <li>
          <strong>Vite</strong> — for fast project bundling and development
        </li>
        <li>
          <strong>Spoonacular API</strong> — for fetching recipe data
        </li>
      </ul>
    </div>
  );
}

export default About;
