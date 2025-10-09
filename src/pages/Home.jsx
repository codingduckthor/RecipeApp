import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to={`/home`}>
      <div>Home Page</div>
    </Link>
  );
}

export default Home;
