import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import ViewRecipe from "./pages/ViewRecipe";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto px-4 pt-12 pb-12 bg-gradient-to-r from-white-400 to-orange-300">
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipe/:id" element={<ViewRecipe />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Home page - logo + app description
// About - all the libs and systems used in a project
// Contact - remove?
// Implement search functionality
