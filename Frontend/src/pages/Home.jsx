import { useEffect, useState } from 'react';

function Home() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch('http://localhost:4000/notes');
    const data = await res.json();
    setNotes(data.payload);
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:4000/notes/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Notes</h2>
      <div className="grid gap-4">
        {notes.map(note => (
          <div key={note._id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)} className="mt-2 text-red-600 hover:underline">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
