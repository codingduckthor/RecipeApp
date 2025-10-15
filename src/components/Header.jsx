import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md fixed top-0 flex-0 w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Recipe Finder
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/home"
                className="cursor-pointer hover:text-orange-200 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer hover:text-orange-200 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="cursor-pointer hover:text-orange-200 transition-colors duration-300"
              >
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
