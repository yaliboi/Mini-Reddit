import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <Link to="/">Home</Link> {/* like a a and href but better for react */}
        <Link to="/create">New blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
