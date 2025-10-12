import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to={`/home`}>
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-black-900">Home Page</p>
      </div>
    </Link>
  );
}

export default Home;
