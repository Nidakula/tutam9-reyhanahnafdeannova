import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import Navbar from './components/Navbar'; // sesuaikan path jika perlu

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </main>
    </div>
  );
}
