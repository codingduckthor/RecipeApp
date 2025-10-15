function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">О проекте</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Приложение <span className="font-semibold">Recipe Finder</span> создано
        в учебных целях и предназначено для демонстрации работы с внешним API,
        управления состоянием и маршрутизации в React.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Функциональность:
      </h2>
      <ul className="text-left text-gray-700 list-disc list-inside max-w-xl">
        <li>Поиск рецептов по названию или ингредиенту</li>
        <li>Просмотр описания и ингредиентов рецепта</li>
        <li>Добавление рецептов в избранное</li>
        <li>Локальное хранение избранных рецептов</li>
        <li>Перевод названий и описаний рецептов на русский язык</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Использованные технологии:
      </h2>
      <ul className="text-left text-gray-700 list-disc list-inside max-w-xl">
        <li>
          <strong>React</strong> — библиотека для построения интерфейсов
        </li>
        <li>
          <strong>Redux</strong> — управление состоянием (favorites)
        </li>
        <li>
          <strong>Tailwind CSS</strong> — стилизация и адаптивная верстка
        </li>
        <li>
          <strong>Vite</strong> — быстрая сборка проекта
        </li>
        <li>
          <strong>API Edamam / TheMealDB</strong> — получение данных о рецептах
        </li>
      </ul>
    </div>
  );
}

export default About;
