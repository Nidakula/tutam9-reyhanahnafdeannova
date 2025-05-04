import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';

export default function App() {
  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">Create Note</Link>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </main>
    </div>
  );
}
