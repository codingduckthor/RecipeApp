import { Link } from "react-router-dom";

function About() {
  return (
    <Link to={`/about`}>
      <div>About Page</div>
    </Link>
  );
}

export default About;
