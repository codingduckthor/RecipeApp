function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Recipe Finder</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Welcome to <span className="font-semibold">Recipe Finder</span> — a
        small but useful application for discovering cooking recipes from all
        over the world. Enter an ingredient or a dish name, and you’ll get a
        selection of recipes with detailed descriptions, ingredients, and a link
        to the original source.
      </p>
    </div>
  );
}

export default Home;
