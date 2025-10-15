function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Recipe Finder</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Добро пожаловать в <span className="font-semibold">Recipe Finder</span>{" "}
        — небольшое, но полезное приложение для поиска кулинарных рецептов со
        всего мира. Введите ингредиент или название блюда, и вы получите
        подборку рецептов с описанием, ингредиентами и ссылкой на оригинальный
        источник.
      </p>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl">
        Добавляйте понравившиеся рецепты в избранное и возвращайтесь к ним в
        любое время!
      </p>
    </div>
  );
}

export default Home;
