import { useEffect, useState } from 'react';

function Home() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchNotes = async () => {
    const res = await fetch(`${apiUrl}/notes`);
    const data = await res.json();
    setNotes(data.payload);
  };

  const deleteNote = async (id) => {
    await fetch(`${apiUrl}/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">All Notes</h2>

      <input
        type="text"
        placeholder="Search by title..."
        className="w-full p-3 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="grid gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <div
              key={note._id}
              className="p-5 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
              <button
                onClick={() => deleteNote(note._id)}
                className="mt-4 inline-block text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notes found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
