const Note = require('../models/NoteSchema');

const getAllNotes = () => Note.find();
const createNote = (data) => Note.create(data);
const deleteNote = (id) => Note.findByIdAndDelete(id);

module.exports = {
  getAllNotes,
  createNote,
  deleteNote
};
