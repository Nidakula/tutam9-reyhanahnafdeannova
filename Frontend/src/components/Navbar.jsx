import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-cover rounded shadow"
          />
          <h1 className="text-xl font-bold tracking-wide">Note App</h1>
        </div>
        <div className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:underline transition duration-200">
            Home
          </Link>
          <Link to="/create" className="hover:underline transition duration-200">
            Create Note
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
