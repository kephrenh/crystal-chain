import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-10 py-6 shadow-md shadow-gray-400">
      <Link to="/">
        <span className="text-2xl font-bold text-blue-500">Crystalchain</span>
      </Link>
      <ul className="flex gap-5 font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
