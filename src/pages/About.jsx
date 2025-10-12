import { Link } from "react-router-dom";

function About() {
  return (
    <Link to={`/about`}>
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-black-900">About Page </p>
      </div>
    </Link>
  );
}

export default About;
