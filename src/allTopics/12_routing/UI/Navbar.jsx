import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-violet-800 text-white flex justify-between px-6 py-3.5">
      <div>
        <Link to="/home">Browser Router</Link>
      </div>

      <div className="gap-5 hidden md:flex">
        <Link to="/learn">Learn</Link>
        <Link to="/references/react">References</Link>
        <Link to="/community">Community</Link>
      </div>
    </nav>
  );
};

export default Navbar;
